import React from "react";
import { useSelector } from 'react-redux';

import {View, Text, StyleSheet} from 'react-native';
import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const FavoritesScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);


    // const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

    return <MealList listData={favMeals} navigation={props.navigation} />;

};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};


export default FavoritesScreen;