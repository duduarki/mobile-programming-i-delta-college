import { Text, StyleSheet} from 'react-native'

export default function CounterDisplay({ count }) {
  return <Text style={styles.counterText}> {count} </Text>;
}


const styles = StyleSheet.create({
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  }
})
