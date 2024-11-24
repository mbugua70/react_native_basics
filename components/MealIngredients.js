import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";

const MealIngredients = ({ ingredients }) => {
  return (
    <>
      <View style={styles.screen}>
        <Text style={styles.textHeader}>Ingredients</Text>

        <ScrollView style={styles.textContainer}>
          {ingredients.map((ingredient) => (
            <Text key={ingredient} style={styles.textDetail}>
              {ingredient}
            </Text>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default MealIngredients;

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    height: "76%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
    borderTopColor: "gray",
    backgroundColor: "#3f2f25",
  },

  textContainer: {
    paddingBottom: 50,
  },

  textHeader: {
    color: "#fff",
    fontWeight: "600",
  },

  textDetail: {
    paddingVertical: 10,
    color: "#fff",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    fontSize: 14,
  },
});
