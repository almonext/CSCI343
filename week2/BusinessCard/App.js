import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Linking} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style="dark"/>
      <SafeAreaView style={styles.root}>
        <View style={styles.imageContainer}>
          <Image 
          style={styles.image}
          source={require("./assets/images/MyPic.jpeg")}/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Alex Montgomery</Text>
          <Text style={styles.text} onPress={() => {Linking.openURL("mailto:acmontgo1@coastal.edu"); }}>acmontgo1@coastal.edu</Text>
          <Text style={styles.text} onPress={() => {Linking.openURL("tel:8038041951");}}>803-804-1951</Text>
          <Text style={styles.text} onPress={() => {Linking.openURL("https://github.com/almonext/CSCI343/tree/main");}}>github</Text>
        </View>
      </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333333"
    },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop: 100,
    width: "100%"

  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
    borderColor: "black",
    borderWidth: 5

  },
  textContainer: {
    flex: 7,
    width: "100%",
    
  },
  name:{
    fontSize: 55,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    marginBottom: 100

  },
  text: {
    textAlign: "center",
    fontSize: 25,
    color: "white",
    fontStyle: "italic",
    marginBottom: 20
  }
});
