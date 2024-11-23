// Tạ Văn Thái 22521377
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  const [username, setUsername] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const handleSaveProfile = () => {
    Alert.alert('Profile Updated', 'Your profile information has been updated.');
  };
  const handlePasswordChange = () => {
    Alert.alert('Password Changed', 'Your password has been successfully updated.');
  };
  const handleLogout = () => {
    Alert.alert('Logged Out', 'You have been logged out.');
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Profile</Text>
        <View style={styles.profileItem}>
          <Text style={styles.label}>Username</Text>
          <Text style={styles.profileValue}>{username}</Text>
        </View>

        <View style={styles.profileItem}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.profileValue}>{email}</Text>
        </View>
        <View style={styles.profileItem}>
          <Text style={styles.label}>Edit Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter new username"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={styles.profileItem}>
          <Text style={styles.label}>Edit Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter new email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
          <Text style={styles.saveButtonText}>Save Profile</Text>
        </TouchableOpacity>

        <Text style={styles.subHeader}>Change Password</Text>

        <View style={styles.profileItem}>
          <Text style={styles.label}>Current Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter current password"
            value={currentPassword}
            onChangeText={setCurrentPassword}
            secureTextEntry
          />
        </View>

        <View style={styles.profileItem}>
          <Text style={styles.label}>New Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter new password"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handlePasswordChange}>
          <Text style={styles.saveButtonText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexGrow: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 20,
    textAlign: 'left',
  },
  profileItem: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500',
  },
  profileValue: {
    fontSize: 18,
    color: '#666',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default Profile;
