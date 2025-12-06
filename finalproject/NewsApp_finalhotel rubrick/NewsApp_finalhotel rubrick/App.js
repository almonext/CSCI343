import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from './constants/colors';
import HotelDetailScreen from './screens/HotelDetailScreen';
import BookmarksScreen from './screens/BookmarksScreen';
import USHotelScreen from './screens/USHotelScreen';
import WorldHotelScreen from './screens/WorldHotelScreen';

import USGridScreen from './screens/USGridScreen';
import WorldGridScreen from './screens/WorldGridScreen';

import { Provider } from 'react-redux';
import { store } from './store/redux/store';

// Keep spalsh visible while fetch resources 
//SplashScreen.preventAutoHideAsync();

//Set the animation options. 
SplashScreen.setOptions({
  duration: 3000,
  fade: true,
});

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
    initialRouteName="HomeTabs"
    screenOptions={{
      headerStyle: {backgroundColor: Colors.primary500},
      headerTintColor: 'white',
      headerTitleStyle: {
        fontFamily: "nolluqa",
        fontSize: 40,
        color: 'white',
      },
      sceneContainerStyle: {backgroundColor: Colors.primary300},
      drawerContentStyle: {backgroundColor: Colors.primary500},
      drawerInactiveTintColor: Colors.primary300,
      drawerActiveTintColor: Colors.accent500,
      drawerActiveBackgroundColor: Colors.primary800,
    }}>
      <Drawer.Screen 
      name="HomeTabs"
      component={TabsNavigator}
      options={{
        title: "All Hotels",
        drawerLabel: "See Hotels",
        drawerIcon: ({color, size}) => (
          <Entypo name="home" color={color} size={size} />
        ),
      }}
      />
      <Drawer.Screen
      name="Bookmarks"
      component={BookmarksScreen}
      options={{
        title: "Saved Hotels",
        drawerLabel: "saved Hotels",
        drawerIcon: ({color, size}) => (
          <Entypo name="bookmarks" color={color} size={size} />
        ),
      }}
      />
    </Drawer.Navigator>
  );
}

function TabsNavigator() {
  return (
    <Tabs.Navigator
    screenOptions={{
      tabBarShowLabel: true,
      tabBarActiveBackgroundColor: Colors.primary800,
      tabBarActiveTintColor: Colors.accent500,
      tabBarInactiveBackgroundColor: Colors.primary500,
      tabBarInactiveTintColor: Colors.primary300,
      tabBarLabelStyle: {
        fontSize: 12,
        fontFamily: "playfairBold",
      },
      tabBarStyle: {
        backgroundColor: Colors.primary500
      }
    }}

    >
      <Tabs.Screen 
      name="US Hotels"
      component={USGridScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
           <MaterialIcons name="newspaper" color={color} size={size} />
        ),
        tabBarLabel: "US Hotels",
      }}
      />
      <Tabs.Screen 
      name="World Hotels"
      component={WorldGridScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
           <MaterialIcons name="language" color={color} size={size} />
        ),
        tabBarLabel: "World Hotels",
      }}
      />
      
      
    </Tabs.Navigator>
  );
}

export default function App() {
    //Fonts, Splashscreen, and Loading
  const [loaded] = Font.useFonts({
    playfair: require("./assets/fonts/Playfair.ttf"),
    playfairBold: require("./assets/fonts/PlayfairBold.ttf"),
    playfairItalic: require("./assets/fonts/PlayfairBoldItalic.ttf"),
    nolluqa: require("./assets/fonts/NolluqaRegular.otf"),
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

  return (
    <>
    <StatusBar style='light' />
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName='DrawerScreen'
        screenOptions={{
          headerTintColor: Colors.primary300,
          headerStyle: {backgroundColor: Colors.primary500},
          contentStyle: {backgroundColor: "black"},
        }}
        >
          <Stack.Screen 
          name="DrawerScreen"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
          />


          <Stack.Screen 
          name="USHotelsByState"
          component={USHotelScreen}
          options={{
            headerBackTitleVisible: false,
          }}
          />

          <Stack.Screen
          name="HotelsByCountry"
          component={WorldHotelScreen}
          options={{
            headerBackTitleVisible: false,
          }}
        />

          <Stack.Screen 
          name="HotelDetail"
          component={HotelDetailScreen}
          options={{
            headerBackTitleVisible: false,
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

