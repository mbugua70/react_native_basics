import { View, Text, FlatList, StyleSheet } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";

const MealsCategoriesScreen = ({ route, navigation }) => {
  // just as navigation prop you will also get route prop to all screen component
  //   route.param  this params object is the one we got when we were setting the the object in the navigation
  // an alternative for this is useRoute hook
  const { categoryId } = route.params;

  const mealsShown = MEALS.filter(
    (mealDetail) => mealDetail.categoryIds.indexOf(categoryId) >= 0
  );

  function renderMealItem(itemData) {
    return (
      <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} />
    );
  }

  // setting header title

  // useEffect(() => {
  //   const categoryTitle = CATEGORIES.find(
  //     (category) => category.id === categoryId
  //   ).title;

  //   navigation.setOptions({
  //     title: categoryTitle,
  //   });
  // }, [categoryId, navigation]);

  // we can also use useLayoutEffect for updating the title to avoid delays

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={mealsShown}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsCategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
