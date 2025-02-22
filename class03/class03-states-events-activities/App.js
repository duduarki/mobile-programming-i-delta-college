import { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import CounterDisplay from './components/CounterDisplay';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <CounterDisplay count={count} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      >
      
        <Text style={styles.buttonText}>Increase (Long press to reset)</Text>
      </TouchableOpacity>

      <View style={styles.space} />

      <TouchableOpacity
        style={[styles.button, styles.decreaseButton]}
        onPress={() => setCount(count - 1)}
        onLongPress={() => setCount(0)}
      >
        <Text style={styles.buttonText}>Decrease (Long press to reset)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  decreaseButton: {
    backgroundColor: '#FF5733',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  space: {
    height: 10,
  },
});
