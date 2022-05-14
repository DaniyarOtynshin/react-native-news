import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { TPost } from '../types'
import { Post } from '../components/Post';

// @ts-ignore
export default function PostsScreen({ navigation, route }) {
  const userId = route.params.userId

  const [posts, setPosts] = useState<Array<TPost> | []>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
      .then(response => response.json())
      .then(json => setPosts(json))
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>News By User ID: {userId}</Text>
      <ScrollView>
        {posts.map((post) => {
          return <Post post={post} navigation={navigation} key={post.id} indicator={'userId'} />
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
