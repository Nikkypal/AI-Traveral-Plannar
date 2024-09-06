import { useFonts } from "expo-font"
import { Stack } from "expo-router";
import {CreateTripContext} from '../context/CreateTripContext'
import { useState } from "react";


export default function RootLayout() {

  useFonts ({
    'Roboto-Regular':require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium':require('../assets/fonts/Roboto-MediumItalic.ttf'),
    'Roboto-bold':require('../assets/fonts/Roboto-Bold.ttf'),
    })

  const [tripData,setTripData]=useState([]);
  return (
    <CreateTripContext.Provider value={{tripData,setTripData}}>
    
      <Stack screenOptions={{
        headerShown:false
      }}>
        {/* <Stack.Screen name="intex" options={{
        headerShown:false
        }}/> */}
          <Stack.Screen name="(tabs)"/>
    </Stack>
    </CreateTripContext.Provider>
  );
}
