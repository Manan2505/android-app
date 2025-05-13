import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { View,Text } from 'react-native'
import Homepage from '../components/Homepage'
import CourseDetails from '../pages/CourseDetails'
import Colors from '../Colors'
import CourseChapter from '../pages/CourseChapter'
import VideoPlayer from '../pages/VideoPlayer';
import NoContent from '../pages/NoContent'
import SplashScreen from '../pages/SplashScreen'
const Stack=createNativeStackNavigator();
const HomeNavigations = () => {
  return (
        <Stack.Navigator screenOptions={{headerShown:false,contentStyle:{backgroundColor:Colors.lightGray}}}>
          <Stack.Screen name="splash" component={SplashScreen} />
          <Stack.Screen name="home" component={Homepage}></Stack.Screen>
          <Stack.Screen name="course-details" component={CourseDetails}></Stack.Screen>
          <Stack.Screen name="course-chapter" component={CourseChapter}></Stack.Screen>
          <Stack.Screen name="course-video" component={VideoPlayer}></Stack.Screen>
          <Stack.Screen name="no-content" component={NoContent}></Stack.Screen>
        </Stack.Navigator>  
        
  )
}

export default HomeNavigations;
