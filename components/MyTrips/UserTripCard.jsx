import { View, Text, Image } from 'react-native'
import React from 'react'
import moment from 'moment';
import { Colors } from './../../constants/Colors';

export default function UserTripCard({trip}) {
    const formatData=(data)=>{
        return JSON.parse(data);
    }
  return (
    <View style={{
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    }}>
      {/* <Image source={require('./../../assets/images/placeholder.jpeg')}
             style={{
                width:100,
                height:100,
                borderRadius:15
             }}
        /> */}
        <Image source={{ uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+formatData(trip.tripData).LocationInfo?.photoRef+'&key=AIzaSyAUSlL7OTLA6uGCLeFY-DWtAYx_HQDlAB4'}}
                    
                    style={{
                        width:100,
                        height:100,
                        borderRadius:15
                    }}
                />
        <View>
            <Text style={{
                fontFamily:'Roboto-Medium',
                fontSize:18
            }}>{trip.tripPlan?.location} </Text>
            <Text style={{
                fontFamily:'outfit',
                fontSize:14,
                color:Colors.GRAY
            }}>{moment(formatData(trip.tripData).startDate).format('DD MMM yyyy')} </Text>
            <Text style={{
                fontFamily:'outfit',
                fontSize:14,
                color:Colors.GRAY
            }}>Traveling:{formatData(trip.tripData).traveler.title}</Text>
        </View>
    </View>
  )
}