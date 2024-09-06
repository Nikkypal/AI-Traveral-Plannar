import { View, Text, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { Colors } from './../../constants/Colors';
import moment from 'moment';
import FlightInfo from '../../components/TripDetails/FlightInfo';

export default function TripDetails() {

    const navigation = useNavigation();
    const { trip } = useLocalSearchParams();
    const [TripDetails, setTripDetails] = useState();
    const [imageUrl, setImageUrl] = useState();

    const formatData = (data) => {
        return data ? JSON.parse(data) : '';
    }


    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        })

        setTripDetails(JSON.parse(trip))

        const imageUrl = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='
        +formatData(JSON.parse(trip)?.tripData)?.LocationInfo?.photoRef+
        '&key=AIzaSyAUSlL7OTLA6uGCLeFY-DWtAYx_HQDlAB4';

        setImageUrl(imageUrl)


    }, [])

    return (
        <View>
            <Image source={{ uri: imageUrl }}

                style={{
                    width: '100%',
                    height: 330,

                }}
            />
            <View style={{
                padding: 15,
                backgroundColor: Colors.WHITE,
                height: '100%',
                marginTop: -30,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30
            }}>
                <Text style={{
                    fontSize: 25,
                    fontFamily: 'Roboto-bold'
                }}>{TripDetails?.tripPlan?.location} </Text>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap:5,
                    marginTop:5
                }}>
                    <Text style={{
                        fontFamily: 'outfit',
                        fontSize: 18,
                        color: Colors.GRAY
                    }}>{moment(formatData(TripDetails?.tripData)?.startDate).format('DD MMM yyyy')} </Text>

                    <Text style={{
                        fontFamily: 'outfit',
                        fontSize: 18,
                        color: Colors.GRAY
                    }}>- {moment(formatData(TripDetails?.tripData)?.endDate).format('DD MMM yyyy')} </Text>

                </View>
                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 17,
                    color: Colors.GRAY
                }}>🚌 {formatData(TripDetails?.tripData)?.traveler?.title}</Text>
           
            {/* Flight Info */}
            <FlightInfo flightData={TripDetails?.tripPlan?.flightDetails}/>
            {/* Hotel List */}

            {/* Trip Day Planner Info*/}
           
           
            </View>

           
        </View>
    )
}