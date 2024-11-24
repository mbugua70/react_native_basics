import { View, Text, Image, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

import MealDetails from "../components/MealDetails";
import IconFavourite from "../components/IconFavourite";

const MealDetailsScreen = ({ route, navigation }) => {
  const [isPressed, setIsPressed] = useState(false);
  const { mealId } = route.params;

  useLayoutEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.id === mealId).title;

    function handleFavourite() {
      setIsPressed((prev) => !prev);
      console.log("clicked");
      console.log(isPressed);
    }

    navigation.setOptions({
      headerRight: () => {
        return (
          <IconFavourite
            color="#351401"
            onPress={handleFavourite}
            isPressed={isPressed}
          />
        );
      },
      title: "Recipe",
    });
  }, [navigation, mealId, isPressed]);

  const mealDetails = MEALS.find((mealDetail) => mealDetail.id === mealId);
  const imageUrl = mealDetails.imageUrl;
  const selectedDetails = {
    title: mealDetails.title,
    ingredients: mealDetails.ingredients,
    steps: mealDetails.steps,
    affordability: mealDetails.affordability,
    complexity: mealDetails.complexity,
    duration: mealDetails.duration,
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <View style={styles.screen}>
        <View style={styles.screenContainer}>
          <Text style={styles.title}>{selectedDetails.title}</Text>
        </View>
        <View style={[styles.screenContainer, styles.imageContainer]}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.imageText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            repudiandae alias dolor!
          </Text>
        </View>
        <MealDetails mealDetails={selectedDetails} />
      </View>
    </>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },

  screenContainer: {
    padding: 10,
  },

  imageContainer: {
    width: "100%",
    height: 250,
    justifyContent: "space-around",
  },

  imageText: {
    fontSize: 14,
  },

  image: {
    width: "100%",
    height: 150,
    borderRadius: 24,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.75,
  },
});
