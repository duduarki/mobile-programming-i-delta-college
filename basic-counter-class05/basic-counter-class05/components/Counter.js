import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);
  const maxLimit = 10;
  const minLimit = 0;
 
  const decrease = () => {
    if (count > minLimit) {
      setCount(count - 1);
    }
  };

    const increment = () => {
    if (count < maxLimit) {
      setCount(count + 1);
    }
  };

       const reset = () => {
      setCount(0);
    
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter</Text>
      <Text style={[styles.counter, count === maxLimit && styles.maxReached]}>
        {count}
      </Text>
      <TouchableOpacity
        onPress={decrease}
        style={[styles.button, count === maxLimit && styles.disabledButton]}
        disabled={count === minLimit}
      >
        <Text style={styles.buttonText}>
          {count === maxLimit ? "Limit Reached" : "decrease"}
            
        </Text>
      </TouchableOpacity>
       
       <TouchableOpacity
        onPress={increment}
        style={[styles.button2, count === maxLimit && styles.disabledButton]}
        disabled={count === maxLimit}
      >
        <Text style={styles.buttonText}>
          {count === maxLimit ? "Limit Reached" : "increase"}
            
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={reset}
        style={[styles.button2, count === maxLimit && styles.buttonReset]}
        disabled={count === maxLimit}
      >
        <Text style={styles.buttonText}>
          {count === maxLimit ? "reset" : "reset"}
            
        </Text>
      </TouchableOpacity>
    </View>
  );
}
      

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E2E",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#F8F8F2",
    marginBottom: 20,
  },
  counter: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#89DDFF",
    marginBottom: 20,
  },
  maxReached: {
    color: "#FF5370",
  },
  button: {
    backgroundColor: "#89DDFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    shadowColor: "#89DDFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

    button2: {
    backgroundColor: "#89DDFF",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
    shadowColor: "#89DDFF",
    shadowOffset: { width: 1, height: 9 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginTop: 20,
  }, 

     buttonReset: {
    backgroundColor: "#FF5370",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
    shadowColor: "#89DDFF",
    shadowOffset: { width: 1, height: 9 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginTop: 20,
  }, 


  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E1E2E",
  },
  disabledButton: {
    backgroundColor: "#44475A",
    shadowColor: "transparent",
  },
});
