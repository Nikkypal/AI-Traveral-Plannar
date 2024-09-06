import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Colors } from './../../constants/Colors'
import { CreateTripContext } from '../../context/CreateTripContext'
import { AI_PROMPT } from '../../constants/Options';
import { chatSession } from '../configs/AiModal';
import { useRouter } from 'expo-router';
import { doc, setDoc } from 'firebase/firestore';
import { auth,db } from '../configs/firebase.configs';

export default function GenerateTrip() {
    const { tripData, setTripData } = useContext(CreateTripContext);
    const [loading,setLoading]=useState(false);
    const router=useRouter();
    const user=auth.currentUser;

    useEffect(() => {
        tripData && GenerateAiTrip()
    }, [tripData])
    const GenerateAiTrip = async() => {
        setLoading(true);

        const FINAL_PROMPT = AI_PROMPT
            .replace('{Location}', tripData?.LocationInfo?.name)
            .replace('{totalDays}', tripData.totalNoOfDays)
            .replace('{totalNight}', tripData.totalNoOfDays - 1)
            .replace('{traveler}', tripData.traveler?.title)
            .replace('{budget}', tripData.budget)
            .replace('{totalDays}', tripData.totalNoOfDays)
            .replace('{totalNight}', tripData.totalNoOfDays - 1)

        console.log(FINAL_PROMPT);
        
          const result = await chatSession.sendMessage(FINAL_PROMPT);
          console.log(result.response.text());
        const tripResp=JSON.parse(result.response.text());
          setLoading(false)
           const docId=(Date.now()).toString();
         const result_=await setDoc(doc(db,"UserTrips",docId),{
            userEmail:user.email,
            tripPlan:tripResp,//AI Result
            tripData:JSON.stringify(tripData),// User Selection Data
            docId:docId

          })
          
          
               router.push('(tabs)/mytrip');
           

        
    }

    return (
        <View style={{
            padding: 25,
            paddingTop: 75,
            backgroundColor: Colors.WHITE,
            height: '100%'
        }}>
            <Text style={{
                fontFamily: 'Roboto-bold',
                fontSize: 35,
                textAlign: 'center'
            }}>
                Please wait...
            </Text>

            <Text style={{
                fontFamily: 'Roboto-Medium',
                fontSize: 20,
                textAlign: 'center',
                marginTop: 40
            }}>
                We are Working to Generate Your Dream Trip
            </Text>

            <Image source={require('./../../assets/images/plane.gif')}
                style={{
                    width: '100%',
                    height: 300,
                    objectFit: 'contain'
                }}


            />

            <Text style={{
                fontFamily: 'outfit',
                color: Colors.GRAY,
                fontSize: 20,
                textAlign: 'center'
            }}>Do Not Go Back</Text>
        </View>
    )
}