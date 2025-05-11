import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { View,Text } from 'react-native'
import Homepage from '../components/Homepage'
import CourseDetails from '../pages/CourseDetails'
const Stack=createNativeStackNavigator();
const HomeNavigations = () => {
  return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="home" component={Homepage}></Stack.Screen>
          <Stack.Screen name="course-details" component={CourseDetails}></Stack.Screen>
        </Stack.Navigator>  
        
  )
}

export default HomeNavigations;
