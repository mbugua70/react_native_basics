import { View, Text, FlatList } from 'react-native'

// DATA or COMPONENTS

import CategoryGridItem from '../components/CategoryGridItem'
import { CATEGORIES } from '../data/dummy-data'



const CategoriesScreen = ({ navigation }) => {
  // navigation it's prop that used by using
  // it's provided only to the screen component

  function handleCategoryGridItem(itemData) {
    function handlePressNavigator() {
      navigation.navigate("MealsDetails", {
        categoryId: itemData.item.id,
      });
      //  the navigaate method takes name of the screen which you want to navigate to as the first arguement
      //then the second arguement is a params which as an object
    }

    return (
      <CategoryGridItem
        title={itemData.item.title}
        color={itemData.item.color}
        onNavigate={handlePressNavigator}
      />
    );
  }

  return (
    <FlatList
      key={"numColumns_1"}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={handleCategoryGridItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen