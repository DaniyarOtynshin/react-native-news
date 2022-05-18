import { ScrollView, StyleSheet, View} from 'react-native';
import {Button, Divider, Text } from 'react-native-paper';
import {useEffect, useState} from "react";

// @ts-ignore
const TabTwoScreen = ({ navigation }) => {
  const [collections, setCollections] = useState([])

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    fetch('https://api.unsplash.com/collections?client_id=SvJ53XqRISs0ROSoihNNRXJbss09NXTLfyscUha-LjM')
      .then(response => response.json())
      .then(json => {
        const cols = json.map((item: any) => {
          return {
            id: item.id,
            title: item.title
          }
        })
        setCollections(cols)
      })
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.title}>Select album</Text>
        <ScrollView style={styles.scroll}>
          {collections.map((colItem) => {
            return (
              <View style={styles.tab} key={colItem.id}>
                <Text>{colItem.title}</Text>
                <Divider />
                <Button onPress={() => navigation.navigate('PostsScreen', {albumId: colItem.id}) }>
                  select
                </Button>
              </View>
            )
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  nav: {
    alignSelf: 'flex-start',
    width: '100%',
    paddingLeft: 20
  },
  tab: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: '#e1e1e1',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingLeft: 10,
    width: '100%'
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  scroll: {
    width: '95%'
  }
});

export default TabTwoScreen;
