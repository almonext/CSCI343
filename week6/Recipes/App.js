import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AddRecipeScreen from './screens/AddRecipeScreen';
import Colors from './constants/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import RecipeScreen from './screens/RecipeScreen';

export default function App() {
  //custom font
  const [fontsLoaded] = useFonts({
    noteFont: require('./assets/fonts/Note.ttf'),
    paperNote: require('./assets/fonts/Papernotes.ttf'),
    paperNoteSketch: require('./assets/fonts/Papernotes Sketch.ttf'),
    paperNoteBold: require('./assets/fonts/Papernotes Bold.ttf'),
  });

  const [currentScreen, setCurrentScreen] = useState("");
  const [currentID, setCurrentID] = useState(4);
  const [currentRecipe, setCurrentRecipe] = useState([
    {
    id: 1, 
    title: "recipe 1", 
    instructions: ""
    },
    {
    id: 2, 
    title: "recipe 2", 
    instructions: ""
    },
    {
    id: 3, 
    title: "recipe 3",  
    instructions: ""
    },
  ]);

  function homeScreenHandler() {
    setCurrentScreen("");
  }
  function recipeScreenHandler() {
    setCurrentScreen("recipe");
  }
  function addRecipeScreenHandler() {
    setCurrentScreen("add");
  }

  function addRecipeHandler(RecipeTilte, RecipeInstructions) {
    setCurrentRecipe((currentRecipe) => [
      ...currentRecipe,
      {
        id: currentID,
        title: RecipeTilte,
        instructions: RecipeInstructions,
      },
    ]);
    setCurrentID(currentID + 1);
    recipeScreenHandler();
  }

  function cancelRecipeHandler(id) {
    setCurrentRecipe((currentRecipe) => {
      return currentRecipe.filter((item) => item.id !== id);
    })
  }

  let screen = <HomeScreen onNext={recipeScreenHandler} />

  if (currentScreen === "recipe") {
    screen = ( <RecipeScreen onHome={homeScreenHandler} onAdd={addRecipeScreenHandler} onDelete={cancelRecipeHandler} currentRecipe={currentRecipe}/>);
  }

  if (currentScreen === "add") {
    screen = ( 
    <AddRecipeScreen onCancel={recipeScreenHandler} onAdd={addRecipeHandler}/>
  );
  }


  return (
    <>
    <StatusBar style="auto" />
    <SafeAreaProvider style={styles.container}>
      {screen}
    </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
