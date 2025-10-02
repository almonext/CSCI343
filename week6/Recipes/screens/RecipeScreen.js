
import { StyleSheet, View } from 'react-native';
import NavButton from '../components/NavButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Title from '../components/Title';
import Colors from '../constants/colors';
import { FlatList } from 'react-native';
import RecipeItem from '../components/recipeitem';
import RecipeModal from '../modals/recipeModal';
import { useState } from 'react';



export default function RecipeScreen(props) {

// set safe area screen boundry
  const insets = useSafeAreaInsets();

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalRecipeTitle, setModalRecipeTitle] = useState('');
  const [modalRecipeText, setModalRecipeText] = useState('');
  function recipeModalHandler(title, text) {
    setModalRecipeTitle(title);
    setModalRecipeText(text);
    setModalIsVisible(true);
  }
  function closeRecipeModalHandler() {
    setModalIsVisible(false);
  }

    return (
      <View 
        style={[styles.rootContainer, 
        {paddingTop: insets.top, 
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right},
        ]}
      >
        <View style={styles.titleContainer}>
          <Title>Recipes</Title>
        </View>

        <View>
          <FlatList 
          data={props.currentRecipe}
          keyExtractor={(item, index) => { return item.id; }}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return (
              <RecipeItem
                id={itemData.item.id}
                title={itemData.item.title}
                onDelete={props.onDelete.bind(this, itemData.item.id)}
                onView={recipeModalHandler.bind(this, itemData.item.title, itemData.item.instructions)}
              />

            );
          }}
            
          />
        </View>

      <RecipeModal
          visible={modalIsVisible}
          title={modalRecipeTitle}
          text={modalRecipeText}
          onClose={closeRecipeModalHandler}
          />




        <View style={styles.navButtonContainer}>
          <View style={styles.navButton}>
            <NavButton onNext={props.onHome}>return home</NavButton>
          </View>
          <View style={styles.navButton}>
            <NavButton onNext={props.onAdd}>Add new Recipe</NavButton>
          </View>
        </View>
        
      </View>



      
    );
    }
    
    const styles = StyleSheet.create({
      rootContainer: {
        flex: 1,
        width: '90%',
      },
      titleContainer: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
      },
      navButtonContainer: {    
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        },
      navButton: {
        marginHorizontal: 10
      }
    });