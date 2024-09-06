import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { router, useNavigation } from 'expo-router'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { useRoute } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth } from '../../configs/firebase.configs';
import { useState } from 'react';

import { createUserWithEmailAndPassword } from "firebase/auth";


export default function signUp() {
  const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const [FullName, setFullName] = useState();

  useEffect(() => {
    navigation.setOptions({
      HeaderShown: false
    })
  }, []);

  const OncreateAccount = () => {

    if (!email&&!password&&!FullName) 
      {
        Alert.alert('please enter all details');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        router.replace('/mytrip')

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        // ..
      });
  }

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        height: '100%'
      }}
    >

      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
        marginTop: 30
      }}>Create New Account</Text>

      {/* Use full Name */}
      <View style={{
        marginTop: 50
      }}>
        <Text style={{
          fontFamily: 'outfit'
        }}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Full Name'
          onChangeText={(Value) => setFullName(Value)} />
      </View>

      {/* Sign In Button */}

      {/* Email */}
      <View style={{
        marginTop: 25
      }}>
        <Text style={{
          fontFamily: 'outfit'
        }}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(Value) => setEmail(Value)}
          placeholder='Enter Email' />
      </View>
      {/* password */}
      <View style={{
        marginTop: 20
      }}>
        <Text style={{
          fontFamily: 'outfit'
        }}>password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(Value) => setpassword(Value)}
          placeholder='Enter Password' />

        {/* Create Account Button */}
      </View>
      <TouchableOpacity style={styles.button}
        onPressIn={OncreateAccount}
      >
        <Text style={{
          color: Colors.white,
          textAlign: 'center',
          fontFamily: 'outfit',
          fontSize: 17
        }}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button1}
        onPressIn={() => router.replace('auth/sign-in')}
      >
        <Text style={{
          color: Colors.black,
          textAlign: 'center',
          fontFamily: 'outfit',
          fontSize: 17
        }}>Sign In</Text>
      </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 3,
    borderRadius: 30,
    borderColor: 'Gray',
    fontFamily: 'outfit'
  },
  button: {
    padding: 15,
    backgroundColor: "black",
    borderRadius: 99,
    marginTop: '10%'
  },
  button1: {
    padding: 15,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: "white",
    borderRadius: 99,
    marginTop: '10%'
  }
})