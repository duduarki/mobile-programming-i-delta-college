
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Home Screen</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
      <Button style ={{ fontSize: 24 }}>Go Settings</ Button>
       <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} /> 
       
    </View>
  );
}
