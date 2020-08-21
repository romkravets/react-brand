import React from 'react';
import { ScrollView, View, Text, Image, Button, StyleSheet } from 'react-native';
import {useSelector} from 'react-redux'

const PrductDetaileScreen = props => {
   const productId = props.navigation.getParam('productId');
   const selectProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId));
   return (
   <View>
      <Text>{selectProduct.title}</Text>
   </View>
   )
}
PrductDetaileScreen.navigationOptions = navData => {
   return {
      headerTitle: navData.navigation.getParam('productTitle')
   };
}

// const styles = StyleSheet.create({
// });

export default PrductDetaileScreen;