import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Welcome = ({}) => {

    const navigated = useNavigation()
    const HandleGetStarted =() =>{
        navigated.navigate("second")
    }
    
    return (
        <View>
            <View>
                <Image resizeMode='stretch' style={{ width: 400, height: 400 }} source={require("../../../assets/HomeScreen.png")} />
            </View>
            <View style={{ backgroundColor: "#fff", marginTop: -30, height: 390, borderRadius: 30 }}>
                <View style={{
                    fontSize: 30, fontWeight: "bold", textAlign: "center",
                    alignItems: "center", marginLeft: 215,
                    marginTop: 10, backgroundColor: "#c7c2f8", height: 8, width: 8,
                    borderRadius: 50
                }}>

                    <View style={{
                        fontSize: 30, fontWeight: "bold", textAlign: "center",
                        alignItems: "center", marginRight: 30,
                        backgroundColor: "#c7c2f8", height: 8, width: 8,
                        borderRadius: 50
                    }}>
                        <View style={{
                            fontSize: 30, fontWeight: "bold", textAlign: "center",
                            alignItems: "center", marginLeft: -60,
                            backgroundColor: "#7368ed", height: 8, width: 30,
                            borderRadius: 50
                        }}></View>

                    </View>
                </View>
                <Text style={{
                    marginTop: 30,
                    // marginBottom:0,
                    fontSize: 45, fontWeight: "bold", textAlign: "center",
                    color: "#756ef3"
                }}>Taskcy</Text>
                <Text style={{
                    fontSize: 32, fontWeight: "bold", textAlign: "center",
                    color: "#2f394b"
                }}>Building Better WorkPlaces</Text>
                <Text style={{
                    marginTop: 10,
                    width: 380,
                    fontSize: 18, fontWeight: "bold", textAlign: "center",
                    color: "#b9b9bb"
                }}>Create a Uniqe emotional story that </Text>

                <Text style={{
                    marginTop: 5,
                    width: 380,
                    fontSize: 18, fontWeight: "bold", textAlign: "center",
                    color: "#b9b9bb"
                }}>describes better than Words</Text>


                <TouchableOpacity style={{
                    marginTop: 20,
                    backgroundColor: "#7c6ef4",
                    padding: 15,
                    width: 300,
                    marginLeft: 33,
                    borderRadius: 15,
                    shadowColor: "#6c56ff", // Shadow color
                    shadowOffset: { width: 0, height: 2 }, // Shadow offset
                    shadowOpacity: 1.2, // Shadow opacity
                    shadowRadius: 3.84, // Shadow radius
                    elevation: 30, // Elevation for Android
                }}
                    onPress={HandleGetStarted}>
                    <Text style={{ fontSize: 23, fontWeight: "bold", color: "white", textAlign: "center" }}>
                        Get Started
                    </Text>
                </TouchableOpacity>

                {/*          </View> */}
            </View>


        </View >
    )
}

export default Welcome