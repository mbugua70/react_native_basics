import { useState, useEffect } from "react";
import { Suspense, startTransition } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

//components
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  // using the custome fonts
  // return an of bolean that shows whether the icons hve loaded or not
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  function handlePickedNumber(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function handleGameIsOver() {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickedNumber={handlePickedNumber} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameIsOver={handleGameIsOver} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  if (!fontsLoaded) {
    return null;
  }
  return (
    <LinearGradient
      colors={[Colors.primary800, Colors.secondary100]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

// ImageBackground component from react native can be used to add background image in your screens
