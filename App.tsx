import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Welcome from './Screen/Viwe/Welcome/WelcomeScreen'
import Second from './Screen/Viwe/SecondScreen'
import Third from './Screen/Viwe/ThirdScreen'
import Four from './Screen/Viwe/Fourth/fourth'
import Signup from './Screen/Viwe/Singup'
import Login from './Screen/Viwe/Login'
import TodayTask from './Screen/Viwe/TodayTask'
import MonthlyTask from './Screen/Viwe/MonthlyTask/Monthly'
import Bottom_Tab_Navigation from './Config/route/tab'
import Homes from './Screen/Viwe/Home/Home'
import Create_Task from './Screen/Viwe/AddTask/ndex'
import Project from './Screen/Viwe/Projetc/ndex'
import Create_Team from './Screen/Viwe/Create_Team/ndex'

// import TodayTask from '../src/Screens/Todaytask/TodayTask'



const Stack = createNativeStackNavigator()
const Index = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator  screenOptions={{ headerShown: false }}>

                <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name='second' component={Second} />
                <Stack.Screen name='third' component={Third} />
                <Stack.Screen name='fourth' component={Four} />
                <Stack.Screen name='Signup' component={Signup} />
                <Stack.Screen name='Login' component={Login} />
                {/* <Stack.Screen name='Homes' component={Homes} /> */}
                <Stack.Screen name='bottom-tabs' component={Bottom_Tab_Navigation} />
                <Stack.Screen name='todaytask' component={TodayTask} />
                <Stack.Screen name='Monthlytask' component={MonthlyTask} />
                <Stack.Screen name='Project' component={Project} />

                <Stack.Screen name='Create_Task' component={Create_Task} />
                <Stack.Screen name='Create_Team' component={Create_Team} />



            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Index