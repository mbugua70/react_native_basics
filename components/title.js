import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.secondary100,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.secondary100,
    padding: 10,
  },
});
