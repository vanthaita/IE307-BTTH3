// Tạ Văn Thái 22521377
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import * as SQLite from 'expo-sqlite/legacy';
import { SafeAreaView } from 'react-native-safe-area-context';

const database = SQLite.openDatabase('tasklist.db');

const TaskManager = () => {
  const [inputValue, setInputValue] = useState('');
  const [taskList, setTaskList] = useState<{ id: number; content: string }[]>([]);

  useEffect(() => {
    console.log(database);
    database.transaction((txn) => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, content TEXT);',
        [],
        () => console.log('Table created successfully'),
        (_, error) => { console.log('Error creating table:', error); return false; }
      );
    });
    loadTasks();
  }, []);

  const loadTasks = () => {
    database.transaction(txn => {
      txn.executeSql('SELECT * FROM tasks;', [], (_, { rows: { _array } }) => setTaskList(_array));
    });
  };

  const addTask = () => {
    if (!inputValue) return;
    database.transaction(txn => {
      txn.executeSql('INSERT INTO tasks (content) VALUES (?);', [inputValue], (_, result) => {
        console.log('Task added:', result);
        loadTasks();
        setInputValue('');
      });
    });
  };

  const removeTask = (id: number) => {
    database.transaction(txn => {
      txn.executeSql('DELETE FROM tasks WHERE id = ?;', [id], (_, result) => {
        console.log('Task deleted:', result);
        loadTasks();
      });
    });
  };

  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Task List</Text>
    <TextInput
      style={styles.input}
      placeholder="Enter a new task"
      placeholderTextColor="#aaa"
      value={inputValue}
      onChangeText={setInputValue}
    />
    <View style={styles.buttonContainer}>
      <Button title="Add Task" onPress={addTask} color="#ff7f50" />
    </View>
    <FlatList
      data={taskList}
      keyExtractor={item => item.id.toString()}
      ListEmptyComponent={<Text style={styles.emptyText}>No tasks available. Add one!</Text>}
      renderItem={({ item }) => (
        <View style={styles.taskItem}>
          <Text style={styles.taskText}>{item.content}</Text>
          <TouchableOpacity onPress={() => removeTask(item.id)}>
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', 
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  buttonContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2, 
  },
  taskText: {
    fontSize: 18,
    color: '#333',
    maxWidth: '80%',
  },
  deleteText: {
    fontSize: 16,
    color: '#ff6347', 
    fontWeight: 'bold',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});
export default TaskManager;
