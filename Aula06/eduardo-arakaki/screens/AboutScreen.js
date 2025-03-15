
import React from 'react';
import { View, Text,Button } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>About Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button style ={{MarginBottom: 20 }}>Go to ProfileScreen</ Button>
      <Button title="Go to Profile" onPress={() => navigation.navigate ('Profile')} /> 
    </View>
  );
}
