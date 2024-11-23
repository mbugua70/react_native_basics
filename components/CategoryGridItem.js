import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";

const CategoryGridItem = ({ title, color, onNavigate }) => {
  return (
    <View style={styles.gridNavItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.buttonContainer,
          pressed ? styles.pressedButton : null,
        ]}
        onPress={onNavigate}
      >
        <View style={[styles.innerGridContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridItem;

const styles = StyleSheet.create({
  gridNavItem: {
    flex: 1,
    margin: 18,
    borderRadius: 8,
    elevation: 6,
    height: 150,
    shadowRadius: 8,
    shadowColor: "black",
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  buttonContainer: {
    flex: 1,
  },
  pressedButton: {
    opacity: 0.5,
  },

  innerGridContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
