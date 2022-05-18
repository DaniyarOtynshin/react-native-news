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
  const [photos, setPosts] = useState<Array<TPost> | []>([])

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    fetch('https://api.unsplash.com/photos?client_id=SvJ53XqRISs0ROSoihNNRXJbss09NXTLfyscUha-LjM')
      .then(response => response.json())
      .then(json => {
        const posts = json.map((item: any) => {
          return {
            id: item.id,
            albumId: 1,
            title: item.title,
            url: item.urls.small,
            thumbnailUrl: item.urls.small,
          }
        })
        setPosts(posts)
      })
  }, [])

  const favoritesIds = useMemo(() => {
    return favorites.map((favorite: any) => {
      return favorite.id
    })
  }, [favorites])

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {photos.map((post) => {
          const remove = favoritesIds.includes(post.id)

          return <Post
            post={post}
            navigation={navigation}
            key={post.id}
            indicator={'id'}
            action={remove ? ['remove', unset] : ['add', set]}
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
  scroll: {
    width: '95%'
  }
});

const mapStateToProps = (state: any) => ({
  favorites: state.favorite.favorites
});

export default connect(mapStateToProps, {
  unset: removePost,
  set: setPost
})(TabOneScreen);
