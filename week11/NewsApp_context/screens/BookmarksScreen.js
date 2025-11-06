import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { LISTINGS } from "../models/dummy_data";
import List from "../components/List/News";
import Colors from "../constants/colors"

export default function BookmarksScreen() {
  const favoriteNewsCtx = useContext(FavoritesContext);
  const favoriteNews = LISTINGS.filter((NewsItem) => {
    return favoriteNewsCtx.ids.includes(NewsItem.id);
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

