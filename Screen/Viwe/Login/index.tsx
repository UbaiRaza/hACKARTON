import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigated = useNavigation()

  const homenav = () => {
    navigated.navigate('bottom-tabs')
  }

  const signupnav = () => {
    navigated.navigate('Signup')
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, paddingBottom: 20, backgroundColor: "#ffff" }}>
      <ScrollView style={{}} >
        <View style={{ backgroundColor: '#ffff', flex: 1 }}>
          <Image resizeMode='cover' style={{ height: 250, width: 400 }} source={require("../../../assets/Singup.jpg")} />
          <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'black', textAlign: 'center', marginTop: -120 }}>
            Logins
          </Text>

          <View style={{ paddingHorizontal: 20, gap: 10, marginTop: 110 }}>

            
            <View style={{ gap: 15 }}>
              <View>
                <Text style={{color:"black"}}>
                  Email Adress
                </Text>
                <TextInput style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10,color:"black" }} />
              </View>
              <View>
                <Text style={{color:"black"}}>
                  Password
                </Text>
                <TextInput style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10,color:"black" }} />
              </View>




              <View style={{ backgroundColor: "#fff", alignItems: "center", marginTop: 20 }}>
                <TouchableOpacity onPress={homenav} style={{ borderWidth: 2, paddingVertical: 10, borderRadius: 20, width: 200, color: "white", padding: 1, }}>
                  <Text style={{ textAlign: 'center', color: 'black', flexWeight: 'bold', fontSize: 19, }}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop:20}}>
                <Text>
                  Create An Account   <TouchableOpacity onPress={signupnav} style={{ padding: 0, margin: 0 }}><Text style={{ fontWeight: "600", textDecorationLine: 'underline', color: "blue" }}>Signup</Text></TouchableOpacity>
                </Text>
              </View>




            </View>


          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Login