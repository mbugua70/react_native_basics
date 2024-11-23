import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as SystemUI from "expo-system-ui";
import CategoriesScreen from "./screens/CategoriesScreen";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    SystemUI.getBackgroundColorAsync("#24180f");
  }, []);
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView>
        <CategoriesScreen />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({

});
