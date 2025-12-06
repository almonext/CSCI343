import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { LISTINGS } from '../data/dummy_data';
import Colors from '../constants/colors';
import List from '../components/List/Hotel';   // <-- FIXED

export default function BookmarksScreen() {
  const favoriteNewsIds = useSelector((state) => state.favoriteNews.ids);

  const favoriteNews = LISTINGS.filter((item) =>
    favoriteNewsIds.includes(item.id)
  );

  if (favoriteNews.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no saved hotels yet!</Text>
      </View>
    );
  }

  return <List news={favoriteNews} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',  // <-- FIXED
    color: Colors.primary300,
  },
});
