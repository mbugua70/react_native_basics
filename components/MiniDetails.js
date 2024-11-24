import { View, Text, StyleSheet } from "react-native";

const MiniDetails = ({ heading, details }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.textHeader}>{heading}</Text>
      <Text style={styles.textDetail}>{details}</Text>
    </View>
  );
};

export default MiniDetails;

const styles = StyleSheet.create({
  textHeader: {
    justifyContent: "center",
    fontWeight: "600",
    marginVertical: 8,
  },
  textDetail: {
    textAlign: "center",
    fontSize: 14,
  },
});
