import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsCategoriesScreen from "./screens/MealsCategoriesScreen";

const Stack = createNativeStackNavigator();

// Stack is now an object with two property where every prperty hold an object that can be used as a component

export default function App() {
  useEffect(() => {
    SystemUI.getBackgroundColorAsync("#24180f");
  }, []);
  return (
    <>
      <StatusBar style="light" />
      {/* <SafeAreaView> */}
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            // the default setting for all the screens
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "#fff",
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
              // default setting for specific screen
              // headerStyle: { backgroundColor: "#351401" },
              // headerTintColor: "#fff",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          />
          <Stack.Screen
            name="MealsDetails"
            component={MealsCategoriesScreen}
            //we can use options to also set screen title dynamically
            // options={({ route, navigation }) => {
            //   // we will have to return something
            //   const { categoryId } = route.params;
            //   return {
            //     title: categoryId,
            //   };
            // }}
          />
        </Stack.Navigator>
        {/* <CategoriesScreen /> */}
      </NavigationContainer>
      {/* </SafeAreaView> */}
    </>
  );
}

const styles = StyleSheet.create({});

// NOTES::

// NavigationContainer - this container should wrap the app that has all the components that should be rendered
// react navigation defautl setting

// safeareaview, background color white, nice header

// the top most screen is used as a default screen

// initialRouteName can also be used to set the default screen
//example

{
  /* <Stack.Navigator initialRouteName="mealsdetails"></Stack.Navigator>; */
}

//useNavigation hook
// in a instead component we can use the useNavigation hook for navigation instead of navigation
// if you have not provided the  names/title for your app..react navigation will  use the name value you have provided as tghe default title
