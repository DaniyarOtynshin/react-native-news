import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useEffect, useMemo, useState} from 'react';
import { TPost } from '../types'
import { Post } from '../components/Post';

import {connect} from "react-redux";
import {removePost, setPost} from "../infrastructure/redux/action/action";

// @ts-ignore
const PostsScreen = ({ navigation, route, unset, set, favorites }) => {
  const userId = route.params.userId

  const [posts, setPosts] = useState<Array<TPost> | []>([])

  const favoritesIds = useMemo(() => {
    return favorites.map((favorite: any) => {
      return favorite.id
    })
  }, [favorites])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
      .then(response => response.json())
      .then(json => setPosts(json))
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>News By User ID: {userId}</Text>
      <Button title={'back'} onPress={() => navigation.navigate('TabTwo')} />
      <ScrollView>
        {posts.map((post) => {
          const remove = favoritesIds.includes(post.id)

          return <Post
            post={post}
            navigation={navigation}
            key={post.id}
            indicator={'userId'}
            action={remove ? ['remove', unset] : ['set', set]}
          />
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const mapStateToProps = (state: any) => ({
  favorites: state.favorite.favorites
});

export default connect(mapStateToProps, {
  unset: removePost,
  set: setPost
})(PostsScreen);
