// Tạ Văn Thái
// 22521377
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable, Dimensions, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Modal from 'react-native-modal';

const { width } = Dimensions.get('window');

const Navbar: React.FC = () => {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);

  const openSidebar = () => {
    setShowSidebar(true);
  };

  const handleOptionSelect = (route: string) => {
    setShowSidebar(false);
    router.push(route as any);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={openSidebar} style={styles.menuButton}>
          <Ionicons name="menu" size={32} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>My App</Text>
      </View>
      <Modal
        isVisible={showSidebar}
        onBackdropPress={() => setShowSidebar(false)}
        onBackButtonPress={() => setShowSidebar(false)}
        swipeDirection="right"
        onSwipeComplete={() => setShowSidebar(false)}
        animationIn="slideInLeft"
        animationInTiming={500}
        animationOut="slideOutLeft"
        animationOutTiming={500}
        backdropTransitionOutTiming={500}
        backdropOpacity={0.5}
        style={styles.sidebarModal}
      >
        <View style={styles.sidebarContent}>
          <Text style={styles.sidebarTitle}>Menu Options</Text>
          <Pressable style={styles.option} onPress={() => handleOptionSelect('/(tabs)')}>
            <Ionicons name="home" size={24} color="white" />
            <Text style={styles.optionText}>Home</Text>
          </Pressable>
          <Pressable style={styles.option} onPress={() => handleOptionSelect('/(routes)/notification')}>
            <Ionicons name="repeat" size={24} color="white" />
            <Text style={styles.optionText}>Notification</Text>
          </Pressable>
          <Pressable style={styles.option} onPress={() => handleOptionSelect('/(tabs)/settings')}>
            <Ionicons name="settings" size={24} color="white" />
            <Text style={styles.optionText}>Settings</Text>
          </Pressable>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#333',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#444',
    paddingHorizontal: 20,
    paddingVertical: 15,
    height: 60,
  },
  menuButton: {
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sidebarModal: {
    margin: 0,
    width: width * 0.75,
    height: '100%',
    justifyContent: 'flex-start',
    backgroundColor: '#222',
    position: 'absolute',
    right: 0,
  },
  sidebarContent: {
    flex: 1,
    padding: 20,
    backgroundColor: '#333',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '100%',
  },
  sidebarTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#555',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    marginVertical: 10,
  },
  optionText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default Navbar;
