import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const GoalInput = ({ onAddGoal, showModal, onModal }) => {
  const [goalInput, setGoalInput] = useState("");

  function goalInputHandler(enteredText) {
    // console.log(enteredText);
    setGoalInput(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(goalInput);
    setGoalInput("");
  }

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/image/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={goalInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              setGoalInput={setGoalInput}
              color="#a065ec"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onModal} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 20,
    // borderBottomWidth: 1,
    // borderBottomColor: "#cccccc",
    flex: 1,
    padding: 10,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    width: "100%",
    // marginRight: 4,
    padding: 12,
    color: "#120438",
  },
  buttonContainer: {
    marginTop: 15,
    // width: "80%",
    flexDirection: "row",
    // justifyContent: "space-around",
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 16,
  },
});

export default GoalInput;
