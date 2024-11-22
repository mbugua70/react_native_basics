import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native'


const CategoryGridItem = ({title, color}) => {
  return (
    <View style={[styles.gridNavItem, {backgroundColor: color}]}>
      <Pressable style={styles.buttonContainer}>
        <View style={styles.innerGridContainer}>
            <Text style="">
                {title}
            </Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridItem

const  styles = StyleSheet.create({
    gridNavItem: {
        flex: 1,
        margin: 18,
        borderRadius: 8,
        elevation: 6,
        height: 150,
        shadowRadius: 8,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.35
    },

    buttonContainer: {
      flex: 1
    },

    innerGridContainer: {
      flex: 1,
      padding: 16,
      justifyContent: "center",
      alignItems: "center",
    },

    title: {
        fontWeight: 'bold',
        fontSize: 24
    }
})