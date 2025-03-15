
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Profile Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    
    </View>
  );
}
