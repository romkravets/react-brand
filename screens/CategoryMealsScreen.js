import React from 'react';
import { useSelector } from 'react-redux';

import { View, Text, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = props => {

  const catId = props.navigation.getParam('categoryId');

  const availibleMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availibleMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;

};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});

export default CategoryMealScreen;
