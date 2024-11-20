import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 26,
    // fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#fff",
    padding: 10,
  },
});
