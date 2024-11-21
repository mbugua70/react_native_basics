import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const GuessLogItem = ({ guess, roundNumber }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 2,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.secondary100,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 5,

    // shadow for ios

    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 0 },
  },

  itemText: {
    fontFamily: "open-sans",
  },
});
