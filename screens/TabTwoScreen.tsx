import { ScrollView, StyleSheet, View} from 'react-native';
import {Button, Divider, Text } from 'react-native-paper';


const userIds = [1, 2, 3, 4, 5, 6, 7, 8]

// @ts-ignore
const TabTwoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users</Text>
      <View style={styles.nav}>
        <ScrollView>
          {userIds.map((userId) => {
            return (
              <View style={styles.tab} key={userId}>
                <Text>{userId}</Text>
                <Divider />
                <Button onPress={() => navigation.navigate('PostsScreen', {userId}) }>
                  Go
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
    paddingTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  nav: {
    alignSelf: 'flex-start',
    paddingLeft: 20
  },
  tab: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default TabTwoScreen;
