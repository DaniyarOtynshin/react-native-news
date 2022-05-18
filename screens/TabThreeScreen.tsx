import { ScrollView, StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';
import {Post} from "../components/Post";
import {removePost} from "../infrastructure/redux/action/action";

// @ts-ignore
function TabThreeScreen({ navigation, favorites, remove }) {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <ScrollView style={styles.scroll}>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  nav: {
    alignSelf: 'flex-start',
    paddingLeft: 20,
    width: '100%'
  },
  tab: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scroll: {
    width: '95%'
  }
});

const mapStateToProps = (state: any) => ({
  favorites: state.favorite.favorites
});

export default connect(mapStateToProps, {
  remove: removePost
})(TabThreeScreen);
