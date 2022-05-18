import { ScrollView, StyleSheet, Text, View} from 'react-native';
import {useEffect, useMemo, useState} from 'react';
import { TPost } from '../types'
import { Post } from '../components/Post';
import { Button } from 'react-native-paper';


import {connect} from "react-redux";
import {removePost, setPost} from "../infrastructure/redux/action/action";

// @ts-ignore
const PostsScreen = ({ navigation, route, unset, set, favorites }) => {
  const albumId = route.params.albumId

  const [photos, setPosts] = useState<Array<TPost> | []>([])

  const favoritesIds = useMemo(() => {
    return favorites.map((favorite: any) => {
      return favorite.id
    })
  }, [favorites])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId)
      .then(response => response.json())
      .then(json => setPosts(json))
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button style={styles.button} onPress={() => navigation.navigate('TabTwo')}>back</Button>
        <Text style={styles.title}>Album: {albumId}</Text>
      </View>
      <ScrollView style={styles.scroll}>
        {photos.map((post) => {
          const remove = favoritesIds.includes(post.id)

          return <Post
            post={post}
            navigation={navigation}
            key={post.id}
            indicator={'albumId'}
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
    width: '100%'
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlignVertical: 'center'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  scroll: {
    width: '95%'
  },
  button: {
    marginRight: 20,
    height: 35
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingLeft: 20,
  }
});

const mapStateToProps = (state: any) => ({
  favorites: state.favorite.favorites
});

export default connect(mapStateToProps, {
  unset: removePost,
  set: setPost
})(PostsScreen);
