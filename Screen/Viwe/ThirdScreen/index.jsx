import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Third = () => {
    const navigated=useNavigation()
    const handleThird =() =>{
        navigated.navigate("fourth")
    }
  return (
    <View style={{
        flex: 1,
        backgroundColor: "rgb(247 247 247)"
    }}>
      <View>
        <Image resizeMode='stretch' style={{ width: 350, height: 380 }} source={require("../../../assets/ThirdImg.jpeg")} />
      </View>

      <View style={{ marginLeft: 40,marginTop:50 }}>
        <Text style={{ fontSize: 34, color: "#756ef3" }}>
          Task Management
        </Text>
        <Text style={{ fontSize: 34, color: "#002055" }}>
          Work more
        </Text>
        <Text style={{ fontSize: 34, fontWeight: "bold", marginRight: 20, color: "#756ef3" }}>
Structured
          <Text style={{ fontSize: 34, color: "#002055" }}>
            and 
          </Text>
        </Text>
        <Text style={{ fontSize: 34, color: "#002055" }}>
          Orginized 👌
        </Text>
      </View>

      <View style={{
        fontSize: 30, fontWeight: "bold", textAlign: "center",
        alignItems: "center", marginLeft: 100, marginTop: 10, backgroundColor: "#c7c2f8",
        height: 8, width: 8, borderRadius: 50
      }}>
        <View style={{
          fontSize: 30, fontWeight: "bold", textAlign: "center",
          alignItems: "center", marginRight: 30, backgroundColor: "#c7c2f8",
          height: 8, width: 8, borderRadius: 50
        }}>
          <View style={{
            fontSize: 30, fontWeight: "bold", textAlign: "center",
            alignItems: "center", marginLeft: -60, backgroundColor: "#7368ed",
            height: 8, width: 30, borderRadius: 50
          }}></View>
        </View>
      </View>

      <TouchableOpacity onPress={handleThird}>
        <Text style={{ color: "#7f8fa9", marginTop:35, marginLeft: 40, fontSize: 15 }}>Skip</Text>
      </TouchableOpacity>
<View>
<TouchableOpacity onPress={handleThird} style={{ alignSelf: 'flex-end', marginRight: 0 ,marginTop:-65}}>
        <View style={{
          width: 120,
          height: 140,
          backgroundColor: '#756ef3',
          borderTopLeftRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{
            color: '#ffffff',
            fontSize: 50,
            position: 'absolute',
            // right: 50 // Adjust the position of the arrow
            textAlign:"center"
          }}>→</Text>
        </View>
      </TouchableOpacity>
</View>
      
    </View>
  )
}

export default Third

const styles = StyleSheet.create({})
