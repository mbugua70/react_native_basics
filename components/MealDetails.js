import { View, Text, StyleSheet } from "react-native";
import MiniDetails from "./MiniDetails";
import MealIngredients from "./MealIngredients";
import MealSteps from "./MealSteps";

const MealDetails = ({ mealDetails }) => {
  return (
    <>
      <View style={styles.screen}>
        {/* miniDetails */}
        <View style={styles.miniContainer}>
          <MiniDetails
            heading="Affordability"
            details={mealDetails.affordability}
          />
          <MiniDetails heading="Complexity" details={mealDetails.complexity} />
          <MiniDetails heading="Duration" details={mealDetails.duration} />
        </View>
        {/* ingredients */}
        <MealIngredients ingredients={mealDetails.ingredients} />
        {/* steps */}
        <MealSteps steps={mealDetails.steps} />
      </View>
    </>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // height: "100%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 30,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.75,
    shadowRadius: 8,
  },
  miniContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
