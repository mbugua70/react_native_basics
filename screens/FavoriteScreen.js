import { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorite_context";
import MealItem from "../components/MealItem";

const FavoriteScreen = ({ navigation, route }) => {
  const favoriteMealContext = useContext(FavoritesContext);
  console.log(favoriteMealContext.id);
  const mealsShown = MEALS.filter((mealdetail) =>
    favoriteMealContext.id.includes(mealdetail.id)
  );

  let content = "";

  if (favoriteMealContext.id.length === 0) {
    content = (
      <View style={styles.rootScreen}>
        <Image source={require("../assets/folder.png")} style={styles.image} />
        <Text style={styles.favoriteText}>You have no favorite list</Text>
      </View>
    );
  } else {
    content = (
      <View style={styles.screen}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={mealsShown}
          renderItem={renderMealItem}
        />
      </View>
    );
  }

  function handleMealDetailsNavigate(mealId) {
    navigation.navigate("MealDetails", {
      mealId: mealId,
    });
  }

  function renderMealItem(itemData) {
    return (
      <MealItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        mealId={itemData.item.id}
        onNavigate={handleMealDetailsNavigate}
      />
    );
  }

  return <>{content}</>;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    flex: 1,
    paddingVertical: 20,
  },
  favoriteText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },

  image: {
    width: 100,
    height: 100,
  },
});
