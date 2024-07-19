import React, { useState } from 'react';
import { View, Modal, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Homes from '../../../Screen/Viwe/Home/Home';
import Masseges from '../../../Screen/Viwe/Massage/ndex';
import Add_Task from '../../../Screen/Viwe/AddTask/ndex';
import { useNavigation } from '@react-navigation/native';
import Massage from '../../../Screen/Viwe/Massage/ndex';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    const [modalVisible, setModalVisible] = useState(false);
   const navgated =   useNavigation()
const HandleCarte_Task = ()=>{
  navgated.navigate('Create_Task')
}
const HandleCarte_Team = ()=>{
    navgated.navigate('Create_Team')
  }
    return (
        <>
            <Tab.Navigator
                initialRouteName="Homes"
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: '#7B61FF',
                }}
            >
                <Tab.Screen
                    name="Homes"
                    component={Homes}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color }) => (
                            <Icon1 name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Folders"
                    component={Massage}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color }) => (
                            <Icon2 name="folder1" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Add"
                    component={Massage} // Placeholder component, should be replaced
                    listeners={{
                        tabPress: e => {
                            e.preventDefault();
                            setModalVisible(true);
                        },
                    }}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color }) => (
                            <View style={styles.addButton}>
                                <Icon1 name="plus" color="#fff" size={26} />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Messages"
                    component={Massage}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color }) => (
                            <Icon name="chatbubble-ellipses-outline" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Massage}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color }) => (
                            <Icon2 name="user" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <SafeAreaView style={styles.modalView}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>X</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={HandleCarte_Task} style={styles.modalOption}>
                            <Text style={styles.modalOptionText}>Create Task</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalOption}>
                            <Text style={styles.modalOptionText}>Create Project</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={HandleCarte_Team} style={styles.modalOption}>
                            <Text style={styles.modalOptionText}>Create Team</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalOption}>
                            <Text style={styles.modalOptionText}>Create Event</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    addButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#7B61FF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    modalView: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        // alignItems: 'center',
        marginTop:450,
    },
    closeButton: {
        alignSelf: 'flex-end',
    },
    closeButtonText: {
        fontSize: 24,
        color: '#7B61FF',
    },
    modalOption: {
        width: '100%',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center',
    },
    modalOptionText: {
        fontSize: 18,
        color: '#333',
    },
});

export default BottomTabNavigation;
