import { View, Text, StyleSheet, ScrollView } from "react-native";

const MealSteps = ({ steps }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.textHeader}>Steps</Text>

      <ScrollView alwaysBounceVertical={false} style={styles.textContainer}>
        {steps.map((step) => (
          <Text key={step} style={styles.textDetail}>
            {step}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default MealSteps;

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    top: 120,
    height: "100%",
    width: "100%",
    zIndex: 998,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
    borderTopColor: "gray",
    backgroundColor: "#351401",
    position: "absolute",
  },

  textHeader: {
    color: "#fff",
    fontWeight: "600",
    marginBottom: 20,
  },

  textDetail: {
    paddingVertical: 10,
    color: "#fff",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    fontSize: 14,
  },
});
