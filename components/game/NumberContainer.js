import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary100,
    padding: deviceWidth < 450 ? 12 : 24,
    borderRadius: 8,
    margin: deviceWidth < 350 ? 12 : 24,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    fontWeight: "bold",
    fontSize: deviceWidth < 380 ? 26 : 36,
    color: Colors.secondary100,
  },
});

// Dimension API it's not a native comp but a javascript object
// we can use it to the dimension width an height
// option 1. screen - including the status bar 2. window excluding the status bar
