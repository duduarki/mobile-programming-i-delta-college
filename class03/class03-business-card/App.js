import { View } from 'react-native';
import BusinessCard from './components/BusinessCard';

export default function App(){
  return (
    <View>
      <BusinessCard name="Alexandre" email="hello@gmail.com" phone="119887733"/>
    </View>
  );
}
