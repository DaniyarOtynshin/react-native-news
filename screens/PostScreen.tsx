import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import {useEffect, useState} from 'react';
import {TPost} from "../types";

// @ts-ignore
const PostScreen = ({ navigation, route }) => {
  const [post, setPost] = useState<TPost | undefined>()

  const baseURL = 'https://jsonplaceholder.typicode.com/posts'
  const indicator = route.params.indicator
  const value = route.params.value

  const config = {
    id: '/',
    userId: '?userId='
  }

  useEffect(() => {
    // @ts-ignore
    fetch(baseURL + config['id'] + value)
      .then(response => response.json())
      .then(json => setPost(json))
  }, [])

  const routeBack = indicator === 'id' ? ['TabOne'] : ['PostsScreen', {userId: value}]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post</Text>
      <Text style={styles.title}>Title: {post?.title}</Text>
      <Text style={styles.body}>Body: {post?.body}</Text>
      <Button mode={'contained'} onPress={() => navigation.navigate(...routeBack)}>Back</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 10,
    fontWeight: 'normal',
    marginBottom: 10
  },
});

export default PostScreen;
