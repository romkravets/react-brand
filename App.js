import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createStore, combineReducer} from 'redux';
import {Provider} from 'react-redux';

import productsReducers from './store/reducers/prodects';

const rootReducer = combineReducer({
  products: productsReducers
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
    <View>
     ...
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({

});
