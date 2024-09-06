import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, useNavigation } from 'expo-router'
import { Colors } from './../../constants/Colors'
import { SelectTravelesList } from '../../constants/Options'
import OptionCard from '../../components/CreateTrip/OptionCard'
import { CreateTripContext } from '../../context/CreateTripContext'
import { useContext } from 'react'
import { useRouter } from 'expo-router'



export default function SelectTraveler() {

  const navigation = useNavigation();
  const [SelectedTraveler, setSelectedTraveler] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const  router  = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    })
  }, [])

  useEffect(() => {
    setTripData({
      ...tripData,
      traveler: SelectedTraveler

    })
  }, [SelectedTraveler]);

  useEffect(() => {
    console.log(tripData);
  }, [tripData])
  return (
    <View style={{
      padding: 25,
      paddingTop: 90,
      backgroundColor: '#fff',
      height: '100%'

    }}>
      <Text style={{
        fontSize: 35,
        fontFamily: 'Roboto-bold',
        marginTop: 20
      }}>Who's Traveling</Text>

      <View style={{
        marginTop: 25

      }}>
        <Text style={{
          fontFamily: 'Roboto-bold',
          fontSize: 20
        }}>Choose your travelers</Text>

        <FlatList
          data={SelectTravelesList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedTraveler(item)}
              style={{
                marginVertical: 10
              }}>
              <OptionCard option={item} selectedOption={SelectedTraveler} />
            </TouchableOpacity>
          )}
        />
      </View>


      <TouchableOpacity
      onPress={() => {
        SelectedTraveler
        ?
        router.push('/create-trip/select-dates')
        :
        Alert.alert('please select Category');
      }}
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