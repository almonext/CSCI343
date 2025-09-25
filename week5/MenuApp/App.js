import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet } from 'react-native';
import BaseScreen from './screens/BaseScreen';
import EventsScreen from './screens/EventsScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import Colors from './constants/colors';




export default function App() {
  const [fontsLoaded] = useFonts({
    'popcornThin': require('./assets/fonts/Popcorn_Mountain--Standard_Thin.otf'),
    'popcorn': require('./assets/fonts/Popcorn_Mountain--Standard.otf'),
  });


  const [currentScreen, setCurrentScreen] = useState("base");

  function eventsScreenHandler() {
    setCurrentScreen('events');
  }

  function BaseScreenHandler() {
    setCurrentScreen('base');
  }

  let screen = <BaseScreen onNext={eventsScreenHandler}/>

  if (currentScreen === 'events') {
    screen = <EventsScreen onNext={BaseScreenHandler} />
  }

  return (
    <>
    <StatusBar style='light' />
    <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
