
import { StyleSheet, View, Image } from 'react-native';
import NavButton from '../components/NavButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Title from '../components/Title';
import Colors from '../constants/colors';


export default function HomeScreen(props) {

  // set safe area screen boundry
  const insets = useSafeAreaInsets();
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
          <Title>Recipe collector</Title>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/homeRecipe.jpg')}
            style={styles.image}
          />
        </View>
        <View style={styles.navButtonContainer}> 
          <NavButton onNext={props.onNext}>Go to Recipe Screen</NavButton>
        </View>

      </View>



      
    );
  }
    
    const styles = StyleSheet.create({
      rootcontainer: {
        flex: 1,
        width: '90%',
      },
      titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
      },
      imageContainer: {
        flex: 2,
        justifyContent: 'center',
        borderWidth: 4,
        borderRadius: 55,
        borderColor: Colors.accent500,
        width: "100%",
      },
      image: {
        width: "100%",
        height: "100%",
        borderRadius: 50,
        resizeMode: "cover",
      },
      navButtonContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
      }
    });
    