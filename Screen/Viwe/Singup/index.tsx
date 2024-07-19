import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { signupApi } from '../../../Config/axios'

const Signup = () => {

  const [first_Name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigation = useNavigation()

  const loginnav = () => {
    if (!first_Name || !email || !password) {
      try {
        const response = await signupApi(data)
        console.log(response.data)
        console.log(data)
        alert("user has been successfully saved")
        // navigation.navigate('bottom-tabs')

    } catch (error) {
        console.log({ error })

    }
    }

    // Your fetch or any other logic goes here
    navigation.navigate('Login')
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, paddingBottom: 20, backgroundColor: "#ffff" }}>
      <ScrollView style={{}}>
        <View style={{ backgroundColor: '#ffff', flex: 1 }}>
          <Image resizeMode='cover' style={{ height: 250, width: 400 }} source={require("../../../assets/Singup.jpg")} />
          <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'black', textAlign: 'center', marginTop: -120 }}>
            Signup
          </Text>

          <View style={{ paddingHorizontal: 20, gap: 10, marginTop: 80 }}>
            <View style={{ gap: 15 }}>
              <View>
                <Text style={{ color: "#000000" }}>
                  Full Name
                </Text>
                <TextInput
                  value={first_Name}
                  style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, color: "#000" }}
                  onChangeText={(text) => setName(text)}
                />
              </View>
              <View>
                <Text style={{ color: "#000000" }}>
                  Email Address
                </Text>
                <TextInput
                  value={email}
                  style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, color: "#000" }}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              <View>
                <Text style={{ color: "#000000" }}>
                  Password
                </Text>
                <TextInput
                  value={password}
                  style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, color: "#000" }}
                  secureTextEntry
                  onChangeText={(text) => { setPassword(text) }}
                />
              </View>

              <View style={{ backgroundColor: "#fff", alignItems: "center", marginTop: 20 }}>
                <TouchableOpacity
                  onPress={loginnav}
                  style={{ borderWidth: 2, paddingVertical: 10, borderRadius: 20, width: 200, color: "white", padding: 1 }}>
                  <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: 19 }}>
                    Signup
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{color:"#000"}}>Already have an account? </Text>
                <TouchableOpacity onPress={loginnav}>
                  <Text style={{ fontWeight: "600", textDecorationLine: 'underline', color: "blue" }}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Signup
