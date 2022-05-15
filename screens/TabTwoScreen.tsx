import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';

const userIds = [1, 2, 3, 4, 5, 6]

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
                <Button title={'Go'} onPress={() => navigation.navigate('PostsScreen', {userId}) } />
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
