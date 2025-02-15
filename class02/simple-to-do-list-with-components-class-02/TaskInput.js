import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function TaskInput({ onAddTask }) {
  const [task, setTask] = useState("");
  
  const handleAddTask = () => {
    if (task.trim() !== "") {
      onAddTask(task);
      setTask("");
    }
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter task..."
        value={task}
        onChangeText={setTask}
      />

      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );      
}

const styles = StyleSheet.create({
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5, backgroundColor: "#fff" },
});
