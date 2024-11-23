// Tạ Văn Thái 22521377
import React from 'react';
import { StyleSheet, ScrollView, Text, View, Pressable } from 'react-native';
import Navbar from '@/components/navbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Href, useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter(); 

  const handleOptionSelect = (route: string) => {
    router.push(route as Href); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <Text style={styles.title}>Welcome to ToDoApp</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <Text>
            TA VAN THAI 22521377
          </Text>
        </View>
        <Pressable style={styles.option} onPress={() => handleOptionSelect('/(routes)/homeDetails')}>
        <Text style={styles.optionText}>Go to Home Details</Text>
      </Pressable>
      </ScrollView>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  optionText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 18,
  },
});

export default Index;
