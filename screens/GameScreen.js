import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { setTokenSourceMapRange } from "typescript";
import Title from "../components/ui/title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import GameOverScreen from "./GameOverScreen";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

// the variable declared below is due to, avoid them from being changed when the component render or rerender again.
let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameIsOver }) => {
  const initialGuess = generateRandomBetween(
    // minBoundary,
    // maxBoundary,
    1,
    100,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  // useEffect used to check if game is over.

  const guessRoundListLength = guessRounds.length;

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameIsOver(guessRoundListLength);
    }
  }, [currentGuess, userNumber, onGameIsOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessRound(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "You know this is wrong", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      // we will set maxBoundary to the current guess to avoid the comp from guessing even a higher value
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRound = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRound);
    setGuessRounds((prevGuessRound) => [newRound, ...prevGuessRound]);
  }

  return (
    <View style={styles.screenContainer}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      {/* <View> */}
      <Card>
        {/* <Text>Higher or Lower?</Text> */}
        <InstructionText style={styles.marginTopAdditional}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessRound.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessRound.bind(this, "greater")}>
              <Ionicons name="add" size="25" color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>

      {/* </View> */}
      <View style={styles.listContainer}>
        {/* {guessRounds.map((guessRound) => (
          <Text key={guessRound}>{guessRound}</Text>
        ))} */}

        {/* instead of using the mp function as shown above we can the the flatList component from react native. */}

        <FlatList
          // the data prop points to the array we want to output
          data={guessRounds}
          // by default when using flatList it will automatically use the keys found in your in object..
          // but if you it cannot find the key in your object you will have to use the keyExtractor .

          keyExtractor={(item) => item}
          // keyExtractor={(item, index) => {
          //   return item.id;
          // }}

          // renderItem used to render the item of an array
          renderItem={(guessRounds) => (
            <GuessLogItem
              guess={guessRounds.item}
              roundNumber={guessRoundListLength - guessRounds.index}
            />
          )}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screenContainer: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 26,
    paddingTop: 24,
    paddingBottom: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  marginTopAdditional: {
    marginBottom: 12,
  },

  listContainer: {
    flex: 1,
    paddingTop: 16,
  },
});
