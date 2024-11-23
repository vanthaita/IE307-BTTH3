// Tạ Văn Thái 22512377
import React, { useState } from 'react';
import { View, Text, Switch, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navbar from '@/components/navbar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSave = () => {
    console.log('Settings saved');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Navbar />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Settings</Text>
        <View style={styles.settingItem}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter username"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.label}>Enable Notifications</Text>
          <Switch
            value={isNotificationsEnabled}
            onValueChange={() => setIsNotificationsEnabled(!isNotificationsEnabled)}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.label}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={() => setIsDarkMode(!isDarkMode)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Save Settings" onPress={handleSave} color="#007AFF" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  settingItem: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
});
