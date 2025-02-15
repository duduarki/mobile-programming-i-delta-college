import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TaskItem({ task, onRemove }) {
  return (
    <TouchableOpacity onPress={() => removeTask(task.id)}>
      <Text style={styles.task}>{task.text} (Tap to remove)</Text>
    </TouchableOpacity>
  );    
}

const styles = StyleSheet.create({
  task: { fontSize: 18, padding: 10, backgroundColor: "#ddd", marginVertical: 5, borderRadius: 5 },
});