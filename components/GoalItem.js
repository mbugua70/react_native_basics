import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const GoalItem = ({ listItem, onDelete, id }) => {
  return (
    // instead of passing an id as shown below we can also use bind method onDelete.bind(this, id)

    <View style={styles.listItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        // ripple for ios
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={() => onDelete(id)}
      >
        <Text style={styles.listItemText}>{listItem}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    margin: 5,
    backgroundColor: "#5e0acc",
    height: 30,
    color: "#fff",
    elevation: 3,
  },
  pressedItem: {
    opacity: 0.5,
  },
  listItemText: {
    paddingTop: 6,
    paddingHorizontal: 10,
    color: "#fff",
  },
});

export default GoalItem;
