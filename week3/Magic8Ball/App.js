import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button, Modal } from 'react-native';

// Magic 8 Ball responses
const responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

export default function App() {
  // State management
  const [userQuestion, setUserQuestion] = useState("");
  const [magicResponse, setMagicResponse] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);

  // Function to handle asking the magic 8 ball
  function askMagicEightBall() {
    if (userQuestion.trim() === "") {
      setMagicResponse("Please enter a question!");
    } else {
      const randomIndex = Math.floor(Math.random() * responses.length);
      setMagicResponse(responses[randomIndex]);
    }
    setModalIsVisible(true);
  }

  // Close modal
  function closeModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.root}>
        <Text style={styles.title}>🎱 Magic Eight Ball</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Ask your question..."
          value={userQuestion}
          onChangeText={setUserQuestion}
        />

        <View style={styles.buttonContainer}>
          <Button title="Ask the Eight Ball" onPress={askMagicEightBall} color="purple" />
        </View>

        {/* Modal for showing question + response */}
        <Modal visible={modalIsVisible} animationType="slide">
          <SafeAreaView style={styles.modalRoot}>
            <Text style={styles.modalTitle}>Your Question:</Text>
            <Text style={styles.modalText}>{userQuestion}</Text>

            <Text style={styles.modalTitle}>Eight Ball Says:</Text>
            <Text style={styles.modalText}>{magicResponse}</Text>

            <View style={styles.buttonContainer}>
              <Button title="Close" color="black" onPress={closeModalHandler} />
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#2b2b2b',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 36,
    color: 'white',
    marginBottom: 20,
    fontWeight: "bold"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#fff",
    color: "black",
    borderRadius: 6,
    width: "100%",
    padding: 12,
    marginBottom: 20,
    fontSize: 18
  },
  buttonContainer: {
    marginTop: 10,
    width: "60%",
    alignSelf: "center"
  },
  modalRoot: {
    flex: 1,
    backgroundColor: '#3b3b98',
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 10
  },
  modalText: {
    fontSize: 20,
    color: "white",
    marginBottom: 20,
    textAlign: "center"
  }
});
