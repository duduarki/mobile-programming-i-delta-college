import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";
import TaskItem from "./TaskItem";
import TaskInput from "./TaskInput";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {    
    setTasks([...tasks, { id: Date.now().toString(), text: task }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>✅ To-Do List</Text>

      <TaskInput onAddTask={addTask} />
      
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onRemove={removeTask} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#f8f9fa" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },  
});
