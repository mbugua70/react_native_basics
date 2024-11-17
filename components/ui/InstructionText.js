import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.numberText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  numberText: {
    fontSize: 24,
    color: Colors.secondary100,
  },
});
