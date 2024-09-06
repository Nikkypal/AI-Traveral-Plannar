import { View, Text, FlatList, ToastAndroid } from 'react-native'
import React, { useEffect, useState,useContext } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from './../../constants/Colors'
import { SelectBudgetOptions } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard'
import { TouchableOpacity } from 'react-native';
import { CreateTripContext } from '../../context/CreateTripContext';
import { useRouter }from 'expo-router'
export default function SelectBudget() {
  
  
  const navigation=useNavigation();
  const [selectedOption,setSelectedOption]=useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router=useRouter();

  

  useEffect(()=>{
      navigation.setOptions({
        headerShown:true,
        headerTransparent:true,
        headerTitle:''
      })
  },[])
   
   useEffect(()=>{

    selectedOption&&setTripData({
        ...tripData,
        budget:selectedOption?.title
    })
   },[selectedOption])

   const onClickContinue=()=>{
    if(!selectedOption)
        {
            ToastAndroid.show('Select Your Budget',ToastAndroid.LONG);
            return;
        }
         
        router.push('/create-trip/review-trip');
   }
    return (
    <View style={{
        paddingTop:75,
        padding:25,
        backgroundColor:Colors.WHITE,
        height:'100%'

    }}>
      <Text style={{
        fontFamily:'Roboto-bold',
        fontSize:35,
        marginTop:20
      }}>
        Budget
      </Text>

      <View style={{
        marginTop:20
      }}>
        <Text style={{
            fontFamily:'Roboto-bold',
            fontSize:19
        }}>Choose Sepending habits for your Trip</Text>


        <FlatList
        data={SelectBudgetOptions}
        renderItem={({item,index})=>(
          <TouchableOpacity style={{marginVertical:10}}
          onPress={()=>setSelectedOption(item)}
          >
            <OptionCard option={item} selectedOption={selectedOption}/>
            </TouchableOpacity>
        )}
        />
      </View>

      <TouchableOpacity
      onPress={() =>onClickContinue()}
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 20
        }}>

          <Text style={{
            textAlign: 'center',
            color: Colors.WHITE,
            fontFamily: 'Roboto-Medium',
            fontSize: 20

          }}>Continue</Text>

      </TouchableOpacity>
    </View>
  )
}