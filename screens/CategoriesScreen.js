import { View, Text, FlatList } from 'react-native'

// DATA or COMPONENTS

import CategoryGridItem from '../components/CategoryGridItem'
import { CATEGORIES } from '../data/dummy-data'


function handleCategoryGridItem (itemData) {
    return (
    <CategoryGridItem title={itemData.item.title} color={itemData.item.color}/>
);
};

const CategoriesScreen = () => {
  return (
    <FlatList key={'numColumns_1'}  data={CATEGORIES} keyExtractor={(item) => item.id}  renderItem={handleCategoryGridItem} numColumns={2}/>
  )
}

export default CategoriesScreen