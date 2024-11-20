import { View, Text, Image, StyleSheet } from "react-native";
import Title from "../components/ui/title";

const GameOverScreen = () => {
  return (
    <View>
      <Title>Game Over!</Title>
      <View style={styles.imageRootContainer}>
        <Image source={require("../assets/success.png")} />
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  imageRootContainer: {
    borderRadius: 200,
    borderWidth: 3,
    width: 400,
    height: 400,
    overflow: "hidden",
    margin: 36,
  },
  imageContainer: {
    width: "100%",
    height: "100%",
  },
});
