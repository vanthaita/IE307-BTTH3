// Tạ Văn Thái 22521377
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

type Category = {
  id: number;
  name: string;
  icon: 'laptop-outline' | 'flask-outline' | 'brush-outline' | 'basketball-outline' | 'musical-notes-outline';
};

const categories: Category[] = [
  { id: 1, name: 'Technology', icon: 'laptop-outline' },
  { id: 2, name: 'Science', icon: 'flask-outline' },
  { id: 3, name: 'Art', icon: 'brush-outline' },
  { id: 4, name: 'Sports', icon: 'basketball-outline' },
  { id: 5, name: 'Music', icon: 'musical-notes-outline' },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const handleCategorySelect = (id: number) => {
    setSelectedCategory(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Categories</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryCard,
              selectedCategory === category.id && styles.selectedCategory,
            ]}
            onPress={() => handleCategorySelect(category.id)}
          >
            <Ionicons
              name={category.icon}
              size={30}
              color={selectedCategory === category.id ? '#fff' : '#000'}
              style={styles.icon}
            />
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category.id && styles.selectedText,
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 16,
  },
  categoryCard: {
    width: 150,
    height: 100,
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  selectedCategory: {
    backgroundColor: '#f79c42', 
  },
  icon: {
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
  },
  selectedText: {
    color: '#fff',
  },
});

export default Index;
