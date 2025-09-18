import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import MovieItem from './components/MovieItem';

export default function App() {
  // movies
  const [movieItems, setMovieItems] = useState([
  {
    id: "1",
    title: "hereditary",
    poster: require("./assets/images/Hereditary.jpg"),
    rating: "9.0",
  },
  {
    id: "2",
    title: "The Dark Knight",
    poster: require("./assets/images/dark_knight.jpg"),
    rating: "9.1",
  },
  {
    id: "3",
    title: "Ford v Ferrari",
    poster: require("./assets/images/FvF.jpg"),
    rating: "8.5",
  },
  {
    id: "4",
    title: "The Fast and the Furious: Tokyo Drift",
    poster: require("./assets/images/Tokyo_Drift.jpg"),
    rating: "6.0",
  },
  {
    id: "5",
    title: "galdiator 2",
    poster: require("./assets/images/Gladiator2.jpg"),
    rating: "8.5",
  },
  {
    id: "6",
    title: "RedLine",
    poster: require("./assets/images/RedLine.jpg"),
    rating: "7.5",
  },
  {
    id: "7",
    title: "Jhon Wick",
    poster: require("./assets/images/Wick.jpg"),
    rating: "8.0",
  },
  {
    id: "8",
    title: "the mummy",
    poster: require("./assets/images/mummy.jpg"),
    rating: "7.0",
  },
  {
    id: "9",
    title: "The Matrix",
    poster: require("./assets/images/Matrix.jpg"),
    rating: "8.7",
  },
  {
    id: "10",
    title: "The Hunger Games",
    poster: require("./assets/images/Hunger_Games.jpg"),
    rating: "7.2",
  },
]);

//list 
   return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>My Top Ten Movies</Text>
      <FlatList
        data={movieItems}
        renderItem={({ item }) => (
          <MovieItem
            title={item.title}
            poster={item.poster}
            rating={item.rating}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
});
