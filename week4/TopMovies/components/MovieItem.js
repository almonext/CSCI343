import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function MovieItem({ title, poster, rating }) {
  return (
    <View style={styles.card}>
      <Image style={styles.poster} source={poster} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.rating}>Rating: {rating}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: "#8b2525ff",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  poster: {
    width: 150,
    height: 220,
    resizeMode: "cover",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  rating: {
    fontSize: 16,
    color: "gray",
    marginTop: 4,
  },
});