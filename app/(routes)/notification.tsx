// Tạ Văn Thái 22521377
import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';

const NotificationScreen = () => {
  const notifications = [
    { id: '1', title: 'Chào mừng!', message: 'Cảm ơn bạn đã tham gia với chúng tôi!', time: '2 giờ trước' },
    { id: '2', title: 'Tính năng mới', message: 'Hãy khám phá tính năng mới của chúng tôi!', time: '1 ngày trước' },
    { id: '3', title: 'Nhắc nhở', message: 'Đừng quên nhiệm vụ của bạn hôm nay.', time: '3 ngày trước' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationCard}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.message}>{item.message}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Không có thông báo nào.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  notificationCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  message: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  time: {
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
  },
  emptyText: {
    textAlign: 'center',
    color: '#aaa',
    marginTop: 20,
  },
});

export default NotificationScreen;
