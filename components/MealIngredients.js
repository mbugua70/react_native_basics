import Animated from "react-native-reanimated";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const MealIngredients = ({ ingredients }) => {
  const [openIngredient, setOpenIngredient] = useState(false);
  const height = useSharedValue("20%");
  // const top = useSharedValue(120);
  // console.log(openIngredient, "the first");
  function handleCloseIngredients() {
    setOpenIngredient((prev) => {
      const newState = !prev;
      height.value = newState ? "80%" : "20%";
      console.log(newState, "second");
      return newState;
    });

    // top.value = openIngredient ? 0 : 120;
  }

  const animatedStyle = useAnimatedStyle(() => ({
    height: withTiming(height.value, {
      duration: 300,
    }),
    // top: withTiming(top.value, { duration: 300 }),
  }));

  return (
    <>
      <Animated.View style={[styles.screen, animatedStyle, { bottom: 0 }]}>
        <View style={styles.headingModal}>
          <Text style={styles.textHeader}>Ingredients</Text>
          <Ionicons
            name={
              openIngredient ? "chevron-up-outline" : "chevron-down-outline"
            }
            size={24}
            color="white"
            onPress={handleCloseIngredients}
          />
        </View>

        <ScrollView style={styles.textContainer}>
          {ingredients.map((ingredient) => (
            <Text key={ingredient} style={styles.textDetail}>
              {ingredient}
            </Text>
          ))}
        </ScrollView>
      </Animated.View>
    </>
  );
};

export default MealIngredients;

const styles = StyleSheet.create({
  screen: {
    bottom: 0,
    position: "absolute",
    zIndex: 998,
    width: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: "hidden",
    borderTopColor: "gray",
    backgroundColor: "#3f2f25",
  },

  textContainer: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  textHeader: {
    color: "#fff",
    fontWeight: "600",
  },

  headingModal: {
    // marginBottom: 20,
    // backgroundColor: "red",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },

  textDetail: {
    paddingVertical: 10,
    color: "#fff",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    fontSize: 14,
  },
});
