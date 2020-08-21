import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';

import ProcuctsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';


const ProductsNavigator = createStackNavigator({
   ProductsOverview: ProcuctsOverviewScreen
}, {
   defaultNavigationOptions: {
      headerStyle: {
         backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
   }
});

export default createAppContainer(ProductsNavigator);