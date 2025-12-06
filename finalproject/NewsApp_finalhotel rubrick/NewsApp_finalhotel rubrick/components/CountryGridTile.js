import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, View, StyleSheet, Platform, Text } from 'react-native';
import Colors from '../constants/colors';

export default function CountryGridTile(props) {
    return (
        <View style={styles.gridItem}>
            <Pressable
            style={({ pressed }) => [
                styles.button,
                pressed ? styles.buttonPressed : null,
            ]}
            android_ripple={{ color: "#CCC" }}
            onPress={props.onPress}
            >
                <LinearGradient
                colors={[
                    props.color,
                    props.color,
                    props.color,
                    props.color,
                    Colors.primary300o5,
                ]}
                style={styles.innerContainer}
                >
                    <Text style={styles.title}>{props.name}</Text>
                </LinearGradient>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowradius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible' //hides ripple overflow on android only
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        fontFamily: 'Vacation',
    }
    })