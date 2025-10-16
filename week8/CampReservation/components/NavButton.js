import { Pressable, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Colors from "../constants/colors";

function NavButton(props) {

  const { width, height } = useWindowDimensions();
  return (
    <Pressable
    onPress={props.onPress}
    style={({ pressed }) => pressed && styles.pressedItem}
    >
        <View style={styles.buttonContainer}>
            <View style={styles.textContainer}>
                <Text style={[styles.text, {fontSize: width * 0.07}]}>{props.children}</Text>
            </View>
        </View>
    </Pressable>
  );
}



const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 1000,
    maxWidth: "70%",
    borderRadius: 300,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: Colors.primary500,
  },
  pressedItem: {
    opacity: 0.5,
  },
  text: {
    padding: 8,
    textAlign: "center",
    color: Colors.accent500,
    fontFamily: "Camp"
  },
});

export default NavButton;