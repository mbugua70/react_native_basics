import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

// passing style from the parent component to the child component

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.numberText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  numberText: {
    fontFamily: "open-sans",
    fontSize: 24,
    color: Colors.secondary100,
  },
});
