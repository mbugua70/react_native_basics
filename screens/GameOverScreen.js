import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Title from "../components/ui/title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ onRestart, roundNumber, userNumber }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageRootContainer}>
        <Image
          style={styles.imageContainer}
          source={require("../assets/success.png")}
        />
      </View>
      {/* nesting a text inside another text */}
      {/* the styling of the parent text will also affect the nested text component */}
      <Text style={styles.summaryText}>
        You needed <Text style={styles.heightlightText}>{roundNumber}</Text>{" "}
        rounds to get the number{" "}
        <Text style={styles.heightlightText}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  imageRootContainer: {
    borderRadius: deviceWidth < 350 ? 75 : 150,
    borderWidth: 3,
    width: deviceWidth < 350 ? 150 : 300,
    height: deviceWidth < 350 ? 150 : 300,
    overflow: "hidden",
    margin: 36,
    borderColor: Colors.primary800,
  },
  imageContainer: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  heightlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
