import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { Button, StyleSheet, View, Text, TextInput } from "react-native";

export default function App() {
  const [goalInput, setGoalInput] = useState("");
  const [listGoal, setListGoal] = useState([]);

  function goalInputHandler(enteredText) {
    // console.log(enteredText);
    setGoalInput(enteredText);
  }

  function addGoalHandler() {
    // console.log(goalInput);
    setListGoal((goal) => [goalInput, ...goal]);

    setGoalInput("");
  }

  return (
    <>
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Your course goal"
            onChangeText={goalInputHandler}
            value={goalInput}
          />
          <Button title="add Goals" onPress={addGoalHandler} />
        </View>
        <View style={styles.goalScoreContainer}>
          <Text>List of goals......</Text>
          {listGoal.length < 1 && <Text>No item in the list</Text>}
          {listGoal.map((item) => {
            return <Text style={styles.listItem}>{item}</Text>;
          })}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 4,
    padding: 8,
  },

  goalScoreContainer: {
    flex: 6,
  },
  listItem: {
    borderRadius: 6,
    paddingTop: 6,
    paddingHorizontal: 10,
    margin: 5,
    backgroundColor: "#5e0acc",
    height: 30,
    color: "#fff",
    elevation: 3,
  },
});


// LAYOUTS IN REACT NATIVE.
// layouts are created using flexbox.
// it's all about how element are positioned inside container.
// flexdirection column is top to bottom
// flexdirection row is left to right

//: NOTE
// - Every view in react native uses a flexbox by default.
// - by default it organizes the child component from top to bottom (column)