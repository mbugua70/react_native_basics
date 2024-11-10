import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, View, Text, FlatList, Button, Alert } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [isModal, setIsModal] = useState(false);
  const [listGoal, setListGoal] = useState([]);

  function closeModalHandler() {
    setIsModal(false);
  }

  function addGoalHandler(goalInput) {
    if (goalInput === "") {
      Alert.alert("Ooops!!", "The input goal cannot be empty", "OK");
    } else {
      setListGoal((goals) => [
        { text: goalInput, id: Math.random().toString() },
        ...goals,
      ]);

      // setGoalInput("");
      closeModalHandler();
    }
  }

  function handleDeleteItem(id) {
    // console.log("delete item");
    setListGoal((goals) => {
      return goals.filter((item) => item.id !== id);
    });
  }

  function handleModal() {
    setIsModal(true);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Godal" color="#a065ec" onPress={handleModal} />
        <GoalInput
          onAddGoal={addGoalHandler}
          showModal={isModal}
          onModal={closeModalHandler}
        />

        <View style={styles.goalScoreContainer}>
          {/* <ScrollView alwaysBounceVertical={false}>
            {listGoal.length < 1 && <Text>No item in the list</Text>}
            {listGoal.map((item) => {
              return (
                // we wil have to style or apply border in the outer view as shown below so that it can also apply in ios device
                <View key={item} style={styles.listItem}>
                  <Text style={styles.listItemText}>{item}</Text>
                </View>
              );
            })}
          </ScrollView> */}
          {listGoal.length < 1 && (
            <Text style={styles.textItem}>No item in the list</Text>
          )}
          <FlatList
            alwaysBounceVertical={false}
            data={listGoal}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  listItem={itemData.item.text}
                  id={itemData.item.id}
                  onDelete={handleDeleteItem}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    // backgroundColor: "#1e085a",
  },
  goalScoreContainer: {
    flex: 6,
  },
  textItem: {
    color: "#fff",
    marginTop: 15,
    justifyContent: "center",
    alignSelf: "center",
  },
});


// LAYOUTS IN REACT NATIVE.
// layouts are created using flexbox.
// it's all about how element are positioned inside container.
// flexdirection column is top to bottom
// flexdirection row is left to right

//: NOTE
// - Every view in react native uses a flexbox by default.
// - by default it organizes the child component from top to bottom (column)

// flatlist is good at rendering very long list
// unlike scrollview flatlist only render visible items.


// NOTE:

// with flatlist... when using and object with key property.. flatlist will automatically render that key or use that key to avoid throwing an error to do with unique key prop when rendering list item
// i.e {text: listItem, key: .fjljfldjfdjfld}
// if your object uses different key name.. your can use keyExtractor which return item, index...
