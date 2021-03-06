import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { RootTabScreenProps } from '../types';
import { useEffect, useState } from 'react';
import { TPost } from '../types'
import { Post } from '../components/Post';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [posts, setPosts] = useState<Array<TPost> | []>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>News</Text>
      <ScrollView>
        {posts.map((post) => {
          return <Post post={post} navigation={navigation} key={post.id} indicator={'id'} />
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
