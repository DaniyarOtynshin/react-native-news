import { ScrollView, StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
import {Post} from "../components/Post";
import {removePost} from "../infrastructure/redux/action/action";

// @ts-ignore
function TabThreeScreen({ navigation, favorites, remove }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite News</Text>
      <View style={styles.nav}>
        <ScrollView>
          {favorites.map((favoritePost: any) => {
            return <Post
              post={favoritePost}
              navigation={navigation}
              key={favoritePost.id}
              indicator={'id'}
              action={['remove', remove]}
            />
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

const mapStateToProps = (state: any) => ({
  favorites: state.favorite.favorites
});

export default connect(mapStateToProps, {
  remove: removePost
})(TabThreeScreen);
