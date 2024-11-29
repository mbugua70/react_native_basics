import Animated from "react-native-reanimated";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const MealSteps = ({ steps }) => {
  const [openStep, setOpenStep] = useState(false);
  const height = useSharedValue("40%");

  function handleCloseStep() {
    setOpenStep((prev) => {
      const newState = !prev;
      height.value = newState ? "80" : "40%";
      return newState;
    });
  }

  const animatedStyle = useAnimatedStyle(() => ({
    height: withTiming(height.value, {
      duration: 300,
    }),
    // top: withTiming(top.value, { duration: 300 }),
  }));

  return (
    <Animated.View style={[styles.screen, animatedStyle]}>
      <View style={styles.headingModal}>
        <Text style={styles.textHeader}>Steps</Text>
        <Ionicons
          name={openStep ? "chevron-up-outline" : "chevron-down-outline"}
          size={24}
          color="white"
          onPress={handleCloseStep}
        />
      </View>

      <ScrollView alwaysBounceVertical={false} style={styles.textContainer}>
        {steps.map((step) => (
          <Text key={step} style={styles.textDetail}>
            {step}
          </Text>
        ))}
      </ScrollView>
    </Animated.View>
  );
};

export default MealSteps;

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    zIndex: 2,
    bottom: 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    // padding: 20,
    borderTopColor: "gray",
    backgroundColor: "#351401",
    position: "absolute",
    paddingBottom: 40,
  },

  textContainer: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  textHeader: {
    color: "#fff",
    fontWeight: "600",
    marginBottom: 10,
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
