import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import PrimaryButton from "./PrimaryButton";

const MealItem = ({ title, imageUrl }) => {
  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        android_ripple={{ color: "black" }}
      >
        <View style={styles.detailContainer}>
          {/* rendering image using url we dont use require in source but we use instead uri */}
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.detailsContainerOne}>
              <Text style={[styles.textDetails, styles.textDetailsHeader]}>
                Title
              </Text>
              <Text style={[styles.textDetails, styles.textPrice]}>
                200 Kshs
              </Text>
              <Text style={[styles.textDetails, styles.textDetailsItem]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </Text>
            </View>
            <View style={styles.detailsContainerTwo}>
              <PrimaryButton styleSelf={{ backgroundColor: "brown" }}>
                +
              </PrimaryButton>
              <Text style={styles.textQuantity}>1</Text>
              <PrimaryButton styleSelf={{ backgroundColor: "gray" }}>
                -
              </PrimaryButton>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  rootContainer: {
    borderRadius: 8,
    backgroundColor: "#fff",
    height: 100,
    flex: 1,
    margin: 6,
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },

  detailContainer: {
    padding: 6,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    width: 80,
    height: 80,
    overflow: "hidden",
  },

  detailsContainer: {
    marginHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
  },

  detailsContainerOne: {
    padding: 4,
    width: "72%",
  },

  detailsContainerTwo: {
    marginLeft: 10,
  },

  image: {
    width: "100%",
    minHeight: "100%",
  },

  textDetailsHeader: {
    fontSize: 14,
    fontWeight: "bold",
  },

  textPrice: {
    color: "brown",
    fontWeight: "bold",
  },

  textDetails: {
    fontSize: 12,
    margin: 0,
  },

  textDetailsItem: {
    color: "gray",
  },

  textQuantity: {
    marginHorizontal: 6,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
  },
});
