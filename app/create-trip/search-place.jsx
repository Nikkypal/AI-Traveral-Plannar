import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {CreateTripContext} from './../../context/CreateTripContext'
import { useRouter }from 'expo-router'


export default function SearchPlace() {
  

    const navigation=useNavigation();
    const {tripData,setTripData}=useContext(CreateTripContext);
    const router=useRouter();
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:'Search'

        })
    },[]);

    useEffect(()=>{
      console.log(tripData);
    }),[tripData]
    
    
  return (
    <View
    style={{
        padding:20,
        paddingTop:90,
        backgroundColor:'white',
        height:'100%'

    }}
    >
      
      <GooglePlacesAutocomplete
      placeholder='Search Place'
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        setTripData({
          LocationInfo:{
            name:data.description,
            coordinates:details?.geometry.location,
            photoRef:details?.photos[0]?.photo_reference,
            url:details?.url
          }
        });

         router.push('/create-trip/select-traveler')
      }}

      
      query={{
        key: 'AIzaSyAUSlL7OTLA6uGCLeFY-DWtAYx_HQDlAB4',
        language: 'en',
      }}
      styles={{
        textInputContainer:{
          borderWidth:1,
          borderRadius:6,
          marginTop:25
        }
      }}
    />
    </View>
  )
}