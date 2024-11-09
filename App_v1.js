import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Testing my first code!!!</Text>
      </View>
      <Text style={styles.dummyText}>Testing two element</Text>
      <Button title="tap me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  dummyText: {
    margin: 16,
    borderWidth: 2,
    borderColor: "blue",
    padding: 10,
  },
});


// style prop is supported on the view comp and text comp and some other comp but not the button comp
// the styling in react native is not the same as that of css. React native uses javascript object like in styling.
