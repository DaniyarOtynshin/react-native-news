import {Image, StyleSheet, Text} from 'react-native';
import {Button, Card} from 'react-native-paper';
import {useEffect, useState} from 'react';
import {TPost} from "../types";

// @ts-ignore
const PostScreen = ({ navigation, route }) => {
  const [post, setPost] = useState<TPost | undefined>()

  const baseURL = 'https://jsonplaceholder.typicode.com/photos'
  const indicator = route.params.indicator
  const value = route.params.value

  const config = {
    id: '/',
    albumId: '?albumId='
  }

  useEffect(() => {
    // @ts-ignore
    fetch(baseURL + config['id'] + value)
      .then(response => response.json())
      .then(json => setPost(json))
  }, [])

  const routeBack = indicator === 'id' ? ['TabOne'] : ['PostsScreen', {albumId: value}]

  const title = post?.title.split(' ')[0]

  return (
    <Card style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Image style={styles.tinyLogo} source={{ uri: post?.thumbnailUrl }} />
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a tortor ante. Nulla facilisi. Nulla facilisi. Quisque iaculis congue enim, commodo consequat lorem porttitor nec. Nullam eu convallis erat. Curabitur mollis urna sed felis pulvinar sollicitudin.
      </Text>
      <Card.Actions style={styles.buttons}>
        <Button mode={'contained'} onPress={() => navigation.navigate(...routeBack)}>Back</Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: '15%',
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: 'auto',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderRadius: '15%',
    width: '93%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  tinyLogo: {
    width: 'auto',
    height: 100,
    // borderRadius: '15%',
  },
  buttons: {
    marginTop: 15,
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  },
  'button--left': {
    width: '45%',
    backgroundColor: '#65a9fd'
  },
  'button--right': {
    width: '45%',
    backgroundColor: '#ff3c3c',
    color: '#fff'
  }
});

export default PostScreen;
