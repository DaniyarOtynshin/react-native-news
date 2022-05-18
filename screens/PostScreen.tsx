import {Image, StyleSheet, Text} from 'react-native';
import {Button, Card} from 'react-native-paper';
import {useEffect, useState} from 'react';
import {TPost} from "../types";

// @ts-ignore
const PostScreen = ({ navigation, route }) => {
  const [post, setPost] = useState<TPost | undefined>()


  const indicator = route.params.indicator
  const value = route.params.value

  const config = {
    id: '/',
    albumId: '?albumId='
  }

  useEffect(() => {
    fetch('https://api.unsplash.com/photos'+ config['id'] + value + '?client_id=SvJ53XqRISs0ROSoihNNRXJbss09NXTLfyscUha-LjM')
      .then(response => response.json())
      .then(json => {
        const post = {
          id: json.id,
          albumId: 1,
          title: json.title,
          url: json.urls.small,
          thumbnailUrl: json.urls.small,
          description: json.description
        }

        setPost(post)
      })
  }, [])

  const routeBack = indicator === 'id' ? ['TabOne'] : ['PostsScreen', {albumId: value}]

  return (
    <Card style={styles.container}>
      <Text style={styles.title}>
        {post?.title}
      </Text>
      <Image style={styles.tinyLogo} source={{ uri: post?.thumbnailUrl }} />
      <Text style={styles.description}>
        Description: {post?.description}
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
    height: 200
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
