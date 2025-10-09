<<<<<<< HEAD
import Colors from "../constants/colors";
import { StyleSheet, Text } from "react-native";


export default function Title(props) {
    return <Text style={styles.title}>{props.children}</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontSize: 45,
        color: Colors.primary300,
        textShadowColor: Colors.accent800,    
        textShadowRadius: 25,
        fontFamily: "noteFont",
        textAlign: "center",
    },
=======
import Colors from "../constants/colors";
import { StyleSheet, Text } from "react-native";


export default function Title(props) {
    return <Text style={styles.title}>{props.children}</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontSize: 60,
        color: Colors.primary300,
        textShadowColor: Colors.accent800,    
        textShadowRadius: 25,
        fontFamily: "Note",
        textAlign: "center",
    },
>>>>>>> bf287a4 (Work on week 7 and update 5 & 6)
});