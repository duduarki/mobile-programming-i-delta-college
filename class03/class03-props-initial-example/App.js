import { View } from 'react-native';
import Message from './components/Message';

export default function App(){
  return (
    <View>
      <Message MyText="Hey" />
      <Message MyText="Props are really cool" />
    </View>
  );
}