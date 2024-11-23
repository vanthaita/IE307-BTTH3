// Tạ Văn Thái 22521377
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const HomeDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>TA VAN THAI</Text>
        <Text style={styles.id}>MSSV: 22521377</Text>
        <Text style={styles.description}>
          Welcome to the home details page 
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f9fafb',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1f2937',
  },
  id: {
    fontSize: 18,
    color: '#4b5563',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#374151',
  },
});

export default HomeDetails;
