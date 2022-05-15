import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {FC, useEffect, useMemo, useState} from 'react';
import { TPost } from '../types'
import { Post } from '../components/Post';
import {connect} from "react-redux";
import {removePost, setPost} from "../infrastructure/redux/action/action";

type TabOneScreenProps = {
  navigation: any,
  favorites: any,
  unset: any,
  set: any
}

const TabOneScreen: FC<TabOneScreenProps> = ({ navigation, favorites, unset, set }) => {
  const [posts, setPosts] = useState<Array<TPost> | []>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
  }, [])

  const favoritesIds = useMemo(() => {
    return favorites.map((favorite: any) => {
      return favorite.id
    })
  }, [favorites])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>News</Text>
      <ScrollView>
        {posts.map((post) => {
          const remove = favoritesIds.includes(post.id)

          return <Post
            post={post}
            navigation={navigation}
            key={post.id}
            indicator={'id'}
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
})(TabOneScreen);
