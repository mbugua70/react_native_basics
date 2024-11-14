import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

import Colors from "../constants/colors";

const StartGameScreen = ({ onPickedNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  function handleResetButton() {
    setEnteredNumber("");
  }

  function handleInputNumber(inputNumber) {
    setEnteredNumber(inputNumber);
  }

  function handleConfirmNumber() {
    const choosenNumber = parseInt(enteredNumber);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      // an alert method has parameter with 1st one being the title, the second one being the msg then third one being button to use and the a function that will be called once the alert button has being clicked
      Alert.alert(
        "Incorrect number",
        "Number must be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: handleResetButton }]
      );
      return;
    }
    onPickedNumber(choosenNumber);
  }

  return (
    <>
      <View style={styles.inputContainer}>
        {/* you can also use maxLength="" string value bcoz js will automatically try to understand your code */}

        <TextInput
          style={styles.numberInputContainer}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={handleInputNumber}
          value={enteredNumber}
        />
        {/* buttons */}
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleResetButton}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleConfirmNumber}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary800,
    // below is a way to add shadow in android app
    elevation: 4,
    // below is a way to add shadow in ios app.
    shadowColor: "black",
    //shadow position

    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  numberInputContainer: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.secondary100,
    borderBottomWidth: 2,
    color: Colors.secondary100,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
