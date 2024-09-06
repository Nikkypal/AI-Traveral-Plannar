import { View, Text } from 'react-native'
import React from 'react'

export default function FlightInfo({flightData}) {
 console.log(flightData)
    return (
    <View>
      <Text>{flightData?.flightPrice}</Text>
      
    </View>
  )
}