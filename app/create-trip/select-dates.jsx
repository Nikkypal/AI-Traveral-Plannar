import { View, Text, ToastAndroid, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors'
import CalendarPicker from "react-native-calendar-picker";
import { TouchableOpacity } from 'react-native';
import moment from 'moment';
import { CreateTripContext } from '../../context/CreateTripContext';
import { useRouter }from 'expo-router';

export default function SelectDate() {

    const navigation=useNavigation();
    const [startDate,setStartDate]=useState();
    const [endDate,setEndDate]=useState();
    const {tripData,setTripData}=useContext(CreateTripContext);
    const router=useRouter();

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    },[])
    
    const onDateChange=(date,type)=>{
         console.log(date,type);
         if (type=='START_DATE')
        {
            setStartDate(moment(date))
        }
        else{
            setEndDate(moment(date))
        }
    }



    const OnDateSelectionContinue=()=>{

        if(!startDate&&!endDate)
        {
            
            Alert.alert('Please Select Start and End Date')
            return;
        }
        const totalNoOfDays=endDate.diff(startDate,'days');
        console.log(totalNoOfDays+1);
        setTripData({
            ...tripData,
            startDate:startDate,
            endDate:endDate,
            totalNoOfDays:totalNoOfDays+1
        });

          router.push('/create-trip/select-budget')
    }
  return (
    <View
    style={{
        padding:25,
        paddingTop:90,
        backgroundColor:Colors.WHITE,
        height:'100%'
        
    }}
    >
      <Text style={{
        fontFamily:'Roboto-Bold',
        fontSize:35,
        marginTop:20
      }}>Travel Dates</Text>

     <View style={{
        marginTop:30
     }}>
     <CalendarPicker 
     onDateChange={onDateChange}
     allowRangeSelection={true}
     minDate={new Date()}
     maxRangeDuration={5}
     selectedRangeStyle={{
        backgroundColor:Colors.PRIMARY
     }}
     selectedDayTextStyle={{
        color:Colors.WHITE
     }}
     />

    </View> 

    <TouchableOpacity
    onPress={OnDateSelectionContinue}
      style={{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        marginTop:35
      }}>

     
        <Text style={{
          textAlign:'center',
          color:Colors.WHITE,
          fontFamily:'Roboto-Medium',
          fontSize:20
          
        }}>Continue</Text>
       
      </TouchableOpacity>

    </View>
  )
}