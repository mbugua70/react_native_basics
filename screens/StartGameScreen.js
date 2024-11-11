import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput style={styles.numberInputContainer} maxLength={2} />
        {/* buttons */}
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
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
    backgroundColor: "#72063c",
    // below is a way to add shadow in android app
    elevation: 4,
    // below is a way to add shadow in ios app.
    shadowColor: "black",
    //shadow position

    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  numberInputContainer: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
