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
          source={require("./assets/images/Snowboarding-Ski.jpg")}/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Salty Pro Shop, Inc.</Text>
          <Text style={styles.text} onPress={() => {Linking.openURL("https://saltyproshop.com/");}}>saltyproshop.com</Text>
          <Text style={styles.text} onPress={() => {Linking.openURL("tel:8435164818");}}>843-516-4818</Text>
          <Text style={styles.text} onPress={() => {Linking.openURL("https://maps.app.goo.gl/2wa2ydYGiqDt5J8PA");}}>Open in Google Maps</Text>
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
