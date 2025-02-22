import { Text, View } from 'react-native';

export default function BusinessCard({ name, phone, email }) {
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Phone: {phone}</Text>
      <Text>Email: {email}</Text>
    </View>    
  );
}

