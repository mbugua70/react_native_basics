import { View, Text, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const IconFavourite = ({ onPress, color, isPressed }) => {
  return (
    <View>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        onPress={onPress}
      >
        <MaterialIcons
          name={isPressed ? "favorite" : "favorite-border"}
          size={24}
          color={color}
        />
      </Pressable>
    </View>
  );
};

export default IconFavourite;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.25,
  },
});
