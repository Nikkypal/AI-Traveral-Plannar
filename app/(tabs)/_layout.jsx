import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from './../../constants/Colors'

export default function Tablayout() {
  return (
    <Tabs screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:Colors.Primary 
    }}>
      <Tabs.Screen name="mytrip"
       options={{
        tabBarLabel:'My Trip',
        tabBarIcon:({Color})=><Ionicons name="location-sharp"
         size={24} color={Color} />
       }}
      />
      <Tabs.Screen name="discover"
      options={{
        tabBarLabel:'Discover',
        tabBarIcon:({Color})=><Ionicons name="globe-sharp"
         size={24} color={Color} />
      }}
      />
      <Tabs.Screen name="profile"
      options={{
        tabBarLabel:'Profile',
        tabBarIcon:({Color})=><Ionicons name="people-circle"
         size={24} color={Color} />
      }}
      />
    </Tabs>
  )
}