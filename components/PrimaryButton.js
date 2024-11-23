import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children, styleSelf }) => {
  return (
    <View style={[styles.buttonContainer, styleSelf]}>
      <Pressable>
        <View>
          <Text style={styles.textButton}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 4,
    margin: 6,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  textButton: {
    color: "#fff",
    fontWeight: "bold",
  },
});
