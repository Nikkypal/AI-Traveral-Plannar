import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid,Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useRouter }from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth } from '../../configs/firebase.configs';
import { signInWithEmailAndPassword } from "firebase/auth";


export default function signIN() {
  const navigation = useNavigation();
  const router=useRouter();

  const [email,setEmail]=useState();
  const [password,setpassword]=useState();


  useEffect(() => {
    navigation.setOptions({
      headerShown: false

    })

  }, [])

   const OnSignIn=()=>{

    if(!email&&!password)
   {

    Alert.alert('Please enter Email & Password');
    return;

    }
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/mytrip')
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,error.code)
    if(errorCode=='auth/invalid-credential')
    {
      ToastAndroid.show("Invalid credential",ToastAndroid.LONG)
    }
  });

  }

  return (
    <View style={{
      padding: 25,
      paddingTop:50,
      backgroundColor: Colors.white,
      height: '100%'
    }}>
      <TouchableOpacity onPress={()=>router.back()}>
      <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
        marginTop:30
      }}>Let's sign You In</Text>
      <Text style={{
        fontFamily: 'outfit',
        fontSize: 30,
        color: Colors.Gray,
        marginTop: 20
      }}>Welcome Back</Text>
      <Text style={{
        fontFamily: 'outfit',
        fontSize: 30,
        color: Colors.Gray,
        marginTop: 20
      }}>You've been missed!</Text>

      {/* Email */}
      <View style={{
        marginTop: 50
      }}>
        <Text style={{
          fontFamily: 'outfit'
        }}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(Value)=>setEmail(Value)}
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
          onChangeText={(Value)=>setpassword(Value)}
          placeholder='Enter Password' />
      </View>

      {/* Sign In Button */}

        <TouchableOpacity style={styles.button}
           onPressIn={OnSignIn}
        >
          <Text style={{
            color: Colors.white,
            textAlign: 'center',
            fontFamily: 'outfit',
            fontSize: 17
          }}>Sign In</Text>
        </TouchableOpacity>

        {/* Create Account Button */}

        <TouchableOpacity style={styles.button1}
          onPressIn={() =>router.replace('auth/sign-up')}
        >
          <Text style={{
            color: Colors.black,
            textAlign: 'center',
            fontFamily: 'outfit',
            fontSize: 17
          }}>Create Account</Text>
        </TouchableOpacity>


    </View>
  )
}



const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 3,
    borderRadius: 30,
    borderColor: 'black',
    fontFamily: 'outfit'
  },
  button: {
    padding: 15,
    backgroundColor: "black",
    borderRadius: 99,
    marginTop:'10%'
  },
  button1: {
    padding: 15,
    borderWidth: 2,
    borderColor:'black',
    backgroundColor: "white",
    borderRadius: 99,
    marginTop:'10%'
  }  
})