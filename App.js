import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FletList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGols] = useState([]);

  const  goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGols(currentGoals => [...currentGoals, enteredGoal]);
  }

  return (
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Course Goal"
            style={styles.input}
            onChangeText={goalInputHandler}
            value={enteredGoal}
            />
          <Button title="ADD"
          onPress={addGoalHandler}/>
        </View>
          <ScrollView>
                  {courseGoals.map(goal =>
                  <View key={goal} style={styles.listItem}>
                    <Text>{goal}</Text>
                  </View>)}
          </ScrollView>
        </View>
  );
}

const styles = StyleSheet.create({
  screen: {
   padding: 20
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: '#000000',
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }


});
