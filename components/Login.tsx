import { View, Text, Image, StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useRouter }from 'expo-router'

export default function Login() {

  const router=useRouter();
  return (
    <View>
      <Image source={require('../assets/images/Travel.jpg')}
        style={{ width: '100%', height: 520 }}
      />

      <View style={styles.container}>
        <Text style={{
          fontSize: 25,
          fontFamily: 'Roboto-Regular',
          textAlign: "center",
          color: 'black',
        }}>AI Travel Planner</Text>

        <Text style={{
          fontFamily: 'outfit',
          fontSize: 17,
          textAlign: 'center',
          color: Colors.Gray,
          marginTop:20
        }}>Discover your next adventure effortlessly. personalized itineraries at your fingertips. Travel smarter with AI-Driven insights.</Text>

        <TouchableOpacity style={styles.button}
           onPressIn={()=>router.push('/auth/sign-in')}
        >
          <Text style={{color:Colors.white,
            textAlign: 'center',
            fontFamily:'outfit',
            fontSize: 17
          }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '100%',
    padding:25

  },
  button: {
    padding: 15,
    backgroundColor: "black",
    borderRadius: 99,
    marginTop:'25%'

  }
})