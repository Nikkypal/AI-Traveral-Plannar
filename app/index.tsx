import { Text, View } from "react-native";
import Login from './../components/Login'
import {auth} from './configs/firebase.configs'
import { Redirect } from "expo-router";
import React from "react";
export default function Index() {


  const user=auth.currentUser;
  console.log('useruser   ',user)
  return (
    <View
      style={{
        flex: 1,
        
      }}
    >
      {user?
       <Redirect href={'/mytrip'}/>:
       <Login/>
     }
     
    </View>
  );
}

