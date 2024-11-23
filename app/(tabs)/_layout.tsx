// Tạ Văn Thái
// 22521377
import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Social',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="todo"
        options={{
          title: 'ToDo',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon 
              name={focused ? 'checkbox' : 'checkbox-outline'} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: 'List',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'list' : 'list-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'List',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon 
              name={focused ? 'person' : 'person-outline'} 
              color={color} 
            />
          ),
        }}
      />
    </Tabs>
  );
}
