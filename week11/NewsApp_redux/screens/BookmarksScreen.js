import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { LISTINGS } from '../models/dummy_data';
import Colors from '../constants/colors';
import List from '../components/List/News';

export default function BookmarksScreen() {
const favoriteNewsIds = useSelector((state) => state.favoriteNews.ids)

const favoriteNews = LISTINGS.filter((NewsItem) => {
    return favoriteNewsIds.includes(NewsItem.id);
  });


if (favoriteNews.length === 0){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You have no saved News yet!</Text>
    </View>
  )
} else {
  return (
      <List news={favoriteNews}/>
    );
}
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
    fontweight: 'bold',
    color: Colors.primary300
  }
});
