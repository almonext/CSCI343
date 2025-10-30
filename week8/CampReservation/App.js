import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Colors from './constants/colors';
import HomeScreen from './screens/HomeScreen';

// Keep spalsh visible while fetch resources 
SplashScreen.preventAutoHideAsync();

//Set the animation options. 
SplashScreen.setOptions({
  duration: 3000,
  fade: true,
});


export default function App() {

  //Fonts, Splashscreen, and Loading
  const [loaded] = Font.useFonts({
    Camp: require("./assets/fonts/Mountain.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);


  //rendering Screen 
  if (!loaded) {
    return null;
  }

  let screen = (
    <HomeScreen />
  )

  return (
    <>
      <StatusBar style='light' />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
  

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent300,
  },
});
