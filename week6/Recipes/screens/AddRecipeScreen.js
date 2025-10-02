

import { StyleSheet, View, TextInput, ScrollView} from 'react-native';
import NavButton from '../components/NavButton';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Title from '../components/Title';
import Colors from '../constants/colors';





export default function AddRecipeScreen(props) {
    // set safe area screen boundry
      const insets = useSafeAreaInsets();

      const [recipeTitle, setRecipeTitle] = useState('');
      const [recipeInstructions, setRecipeInstructions] = useState('');

      function addRecipeHandler() {
        props.onAdd(recipeTitle, recipeInstructions);
        props.onCancel();
      }
        return (
          <View 
            style={[styles.rootcontainer, 
            {paddingTop: insets.top, 
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right}
            ]}
          >
            <View style={styles.titleContainer}>
              <Title>add Recipe</Title>
            </View>
    
            <View style={styles.scrollContainer}>
              <ScrollView>
                <View style={styles.recipeTitleContainer}>
                  <TextInput
                  onChangeText={setRecipeTitle}
                  placeholder="Recipe Title"
                  style={styles.recipeTitle}

                  />
            </View>
            <View style={styles.recipeTitleContainer}>
                  <TextInput
                  onChangeText={setRecipeInstructions}
                  placeholder="enter text here"
                  textAlignVertical="top"
                  multiline={true}
                  numberOfLines={20}
                  style={styles.recipeText}

                  />
            </View>
            
            <View style={styles.navButtonContainer}>
              <View style={styles.navButton}> 
              <NavButton onNext={addRecipeHandler}>submit</NavButton>
            </View>
            <View style={styles.navButton}>
              <NavButton onNext={props.onCancel}>cancel</NavButton>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
          
        );
      }
    
    const styles = StyleSheet.create({
      rootcontainer: {
        flex: 1,
      },
      titleContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        marginVertical: 20,
        marginBottom: 50,
      },
      scrollContainer: {
        flex: 5,
      },
      recipeTitleContainer: {
        borderWidth: 3,
        backgroundColor: Colors.primary300,
      },
      recipeTitle: {
        color: Colors.accent800,
        fontWeight: 'bold',
        fontSize: 30,
      },
      recipeText: {
        color: Colors.primary800,
      },
      navButtonContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      navButton: {
        marginHorizontal: 10,
      }


    });