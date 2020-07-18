import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState("Hello")
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <StatusBar style="auto" />
      <Button title="Change Text" onPress={() => setOutputText('World')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
