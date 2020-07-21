import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);



  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals =>
      [...currentGoals,
      { id: Math.random().toString(), value: goalTitle}
      ]);
  };

  const removeGoalHandler = goalId => {
    console.log(goalId);
      setCourseGoals(currentGoals => {
        return currentGoals.filter((goal) => goal.id !== goalId);
      })
  }

  return (
      <View style={styles.screen}>
          <GoalInput onAddGoal={addGoalHandler}/>
          <FlatList
              keyExtractor={(item, index) => item.id}
              data={courseGoals}
              renderItem={itemData =>
                <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>
              }/>
        </View>
  );
}

const styles = StyleSheet.create({
  screen: {
   padding: 20
  },


});
