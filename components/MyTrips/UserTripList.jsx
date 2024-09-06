import { View, Text, Image } from 'react-native'
import React from 'react'
import moment from 'moment';
import { Colors } from './../../constants/Colors';
import { TouchableOpacity } from 'react-native';
import UserTripCard from './UserTripCard';
import { useRouter } from 'expo-router';

export default function UserTripList({ userTrips}) {
    const LatestTrip = JSON.parse(userTrips[0].tripData)
    const router=useRouter();

    
    return userTrips && (
        <View>
            <View style={{
                marginTop: 30
            }}>
                {LatestTrip.LocationInfo?.photoRef ?
                    <Image source={{ uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+LatestTrip.LocationInfo?.photoRef+'&key=AIzaSyAUSlL7OTLA6uGCLeFY-DWtAYx_HQDlAB4'}}
                    
                        style={{
                            width: '100%',
                            height: 240,
                            objectFit: 'cover',
                            borderRadius: 15
                        }}
                    />
                    :

                    <Image
                        source={require('../../assets/images/placeholder.jpeg')}
                        style={{
                            width: '100%',
                            height: 240,
                            objectFit: 'cover',
                            borderRadius: 15
                        }}
                    />}
                <View style={{ marginTop: 10 }}>
                    <Text style={{
                        fontFamily: 'Roboto-Medium',
                        fontSize: 28
                    }}>{userTrips[0]?.tripPlan?.location}</Text>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 5
                    }}>

                        <Text style={{
                            fontFamily: 'outfit',
                            fontSize: 17,
                            color: Colors.GRAY
                        }}>{moment(LatestTrip.startDate).format('DD MMM yyyy')}</Text>

                        <Text style={{
                            fontFamily: 'outfit',
                            fontSize: 17,
                            color: Colors.GRAY
                        }}>🚌 {LatestTrip.traveler.title}</Text>
                    </View>
                    <TouchableOpacity
                     onPress={()=>router.push({pathname:'/trip-details',params:{
                        trip:JSON.stringify(userTrips[0])
                     }})}   
                    style={{
                        backgroundColor: Colors.PRIMARY,
                        padding: 15,
                        borderRadius: 15,
                        marginTop: 10
                    }}>
                        <Text style={{
                            color: Colors.WHITE,
                            textAlign: 'center',
                            fontFamily: 'Roboto-Medium',
                            fontSize: 15
                        }}>See Your Plan</Text>
                    </TouchableOpacity>
                </View>
                {userTrips.map((trip, index) => (
                    <UserTripCard trip={trip} key={index} />
                ))}
            </View>
        </View>
    )
}