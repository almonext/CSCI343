import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

function NavButton(props) {
  return (
    <Pressable
      android_ripple={{ color: Colors.primary800 }}
      onPress={props.onPress}
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && styles.pressedItem
      ]}
    >
      <Text style={styles.text}>{props.children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    borderRadius: 300,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: Colors.primary500,
  },
  pressedItem: {
    opacity: 0.6,
  },
  text: {
    padding: 8,
    fontSize: 25,
    textAlign: "center",
    color: Colors.accent500,
    fontFamily: "Note",
  },
});

export default NavButton;
