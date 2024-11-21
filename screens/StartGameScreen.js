import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

import Colors from "../constants/colors";
import Title from "../components/ui/title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({ onPickedNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { width, height } = useWindowDimensions();

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

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <>
      <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
          <View
            style={[styles.rootContainer, { marginTop: marginTopDistance }]}
          >
            <Title>Guess My Number</Title>
            {/* <View style={styles.inputContainer}>

        </View> */}
            <Card>
              {/* you can also use maxLength="" string value bcoz js will automatically try to understand your code */}
              <InstructionText>Enter a Number</InstructionText>
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
                  <PrimaryButton onPress={handleResetButton}>
                    Reset
                  </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={handleConfirmNumber}>
                    Confirm
                  </PrimaryButton>
                </View>
              </View>
            </Card>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
};

export default StartGameScreen;

// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    // marginTop: deviceHeight < 380 ? 30 : 90,
    flex: 1,
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


// NOTE::

// the code outside the comp function won't exercute again, since it's only exercutec once.