import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from './../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { CreateTripContext } from '../../context/CreateTripContext';
import moment from 'moment';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'

export default function ReviewTrip() {
  
    const navigation=useNavigation();
    const {tripData,setTripData}=useContext(CreateTripContext);

    const router=useRouter();

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,  
           headerTransparent:true,
           headerTitle:''
        })
    },[])

    //📍📅🤑

    return (
    <View style={{
        padding:25,
        paddingTop:96,
        backgroundColor:Colors.WHITE,
        height:'100%'
    }}>
      <Text style={{
        fontFamily:'Roboto-bold',
        fontSize:35,
        marginTop:10
      }}>Review Your Trip</Text>
      
     <View style={{
        marginTop:20
     }}>
        <Text style={{
            fontFamily:'Roboto-Bold',
            fontSize:20
        }}>Before generating your trip ,Please review Your Selection</Text>
      
      {/* Destination Info */}
      <View style={{
        marginTop:40,
        display:'flex',
        flexDirection:'row',
        gap:20
      }}>
      <Text style={{
        fontSize:30
      }}>📍</Text>

      <View>
        <Text style={{
            fontFamily:'Outfit',
            fontSize:20,
            color:Colors.GRAY
        }}>Destination</Text>
        <Text style={{
            fontFamily:'Roboto-Medium',
            fontSize:20
        }}>{tripData?.LocationInfo?.name}</Text>
      </View>
      </View>
      
      {/* Date Selected Info */}
      <View style={{
        marginTop:25,
        display:'flex',
        flexDirection:'row',
        gap:20
      }}>
      <Text style={{
        fontSize:30
      }}>📅</Text>

      <View>
        <Text style={{
            fontFamily:'Outfit',
            fontSize:20,
            color:Colors.GRAY
        }}>Travel Date</Text>
        <Text style={{
            fontFamily:'Roboto-Medium',
            fontSize:20
        }}>{moment(tripData?.startDate).format('DD MMM')
        +" To "+
        moment(tripData.endDate).format('DD MMM')+"  "}
        ({tripData?.totalNoOfDays} days)
        </Text>
      </View>
      </View>

       {/* Traveles Info */}
       <View style={{
        marginTop:25,
        display:'flex',
        flexDirection:'row',
        gap:20
      }}>
      <Text style={{
        fontSize:30
      }}>🚌</Text>

      <View>
        <Text style={{
            fontFamily:'Outfit',
            fontSize:20,
            color:Colors.GRAY
        }}>Who is Traveling</Text>
        <Text style={{
            fontFamily:'Roboto-Medium',
            fontSize:20
        }}>{tripData?.traveler?.title}
        </Text>
      </View>
      </View>

       {/* Budget Info */}
       <View style={{
        marginTop:25,
        display:'flex',
        flexDirection:'row',
        gap:20
      }}>
      <Text style={{
        fontSize:30
      }}>🤑</Text>

      <View>
        <Text style={{
            fontFamily:'Outfit',
            fontSize:20,
            color:Colors.GRAY
        }}>Budget</Text>
        <Text style={{
            fontFamily:'Roboto-Medium',
            fontSize:20
        }}>{tripData?.budget}
        </Text>
      </View>
      </View>
      </View> 

      <TouchableOpacity
      onPress={() =>router.replace('/create-trip/generate-trip')}
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop:80
        }}>

          <Text style={{
            textAlign: 'center',
            color: Colors.WHITE,
            fontFamily: 'Roboto-Medium',
            fontSize: 20

          }}>Build My  Trip</Text>

      </TouchableOpacity>


    </View>
  )
}