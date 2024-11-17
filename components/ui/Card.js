import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    marginTop: 20,
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
});
