import { ScrollView, StyleSheet, View} from 'react-native';
import {Button, Divider, Text } from 'react-native-paper';

const albumIds = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// @ts-ignore
const TabTwoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.title}>Select album</Text>
        <ScrollView style={styles.scroll}>
          {albumIds.map((albumId) => {
            return (
              <View style={styles.tab} key={albumId}>
                <Text>{albumId}</Text>
                <Divider />
                <Button onPress={() => navigation.navigate('PostsScreen', {albumId}) }>
                  ->
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
