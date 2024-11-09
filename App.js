import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, Text, TextInput } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Your course goal" />
          <Button title="add Goals" />
        </View>
        <View>
          <Text>List of goals......</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "75%",
    marginRight: 4,
    padding: 8,
  },
});


// LAYOUTS IN REACT NATIVE.
// layouts are created using flexbox.
// it's all about how element are positioned inside container.
// flexdirection column is top to bottom
// flexdirection row is left to right

//: NOTE
// - Every view in react native uses a flexbox by default.
// - by default it organizes the child component from top to bottom (column)