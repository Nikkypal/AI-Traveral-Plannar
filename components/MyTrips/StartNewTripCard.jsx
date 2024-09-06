import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useRouter }from 'expo-router'

export default function StartNewTripCard() {

    const router=useRouter();
  return (
    <View
    style={{
        padding:20,
        marginTop:50,
        display:'flex',
        alignItems:'center',
        gap:20
    }}
    >
      <Ionicons name="location-sharp" size={35} color="black" />
      <Text style={{
        fontSize:30,
        fontFamily:'Roboto-Medium'
      }}>
        No trips planned yet
      </Text>

      <Text style={{
        fontSize:20,
        fontFamily:'outfit',
        textAlign:'center',
        color:Colors.GRAY
      }}>
        Looks Like its time to plan a new travel experinece! Get Started below
      </Text>

      <TouchableOpacity
      onPress={()=>router.push('/create-trip/search-place')}
      style={{
        padding:15,
        backgroundColor:'black',
        borderRadius:15,
        borderWidth:2,
        paddingHorizontal:30
      }}
      >
        <Text style={{
            color:'white',
            fontFamily:'outfit-medium',
            fontSize:17
        }}>Start a new trip</Text>
        </TouchableOpacity>
    </View>
  )
}