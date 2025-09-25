
import { StyleSheet, Text, View, Image, Linking, Button } from 'react-native';
import Title from '../components/Title';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function BaseScreen(props) {
    //Setting Safe Area Screen Boundaries   
    const insets= useSafeAreaInsets();

return (
    <View 
        style={[
                styles.rootContainer,
                {
                paddingTop: insets.top, 
                paddingBottom: insets.bottom,
                paddingLeft: insets.left, 
                paddingRight: insets.right,
                },
        ]}
>
        <View style={styles.titleContainer}>
                <Title>Crafty Rooster</Title>
        </View>

        <View style={styles.imageContainer}>
                <Image 
                    style={styles.image} 
                    source={require("../assets/images/Roost.jpg")}
                />
        </View>

        <View style={styles.infoContainer}>
                <Text style={styles.infoText}
                onPress={() => Linking.openURL("tel:8434388330")}>843-438-8330
                </Text>

                <Text 
                style={styles.infoText}
                onPress={() => {Linking.openURL("https://maps.app.goo.gl/zNV9241YQUV9aehG8")}}>
                        1125 3rd Ave{"\n"}Conway, SC 29526
                </Text>

                <Text 
                style={styles.infoText}
                onPress={() => {Linking.openURL("https://craftyrooster.com/")}}>
                        www.craftyrooster.com
                </Text>

        </View>

        <View style={styles.buttonContainer}>
                <Button title="View Menu" onPress={props.onNext}/>
        </View>

</View>
)
  }

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center'
  },

    titleContainer: {
        flex: 1,    
        justifyContent: 'center',  
    },

    imageContainer: {
        flex: 4,
    },

    image: {
        resizeMode: 'cover',
        width: 300,
        height: '100%',
    },
    infoContainer: {
        flex: 3,
        justifyContent: 'center',
    },
    infoText: {
        textAlign: 'center',
        fontSize: 30,
        padding: 7
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 40,
        width: 150,
    }
});