import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from '../components/Homepage';
import CourseDetails from '../pages/CourseDetails';
import CourseChapter from '../pages/CourseChapter';
import VideoPlayer from '../pages/VideoPlayer';
import NoContent from '../pages/NoContent';
import SplashScreen from '../pages/SplashScreen';
import LoginScreen from '../pages/LoginScreen';
import SignupScreen from '../pages/SignupScreen';
import Colors from '../Colors';

const Stack = createNativeStackNavigator();

const HomeNavigations = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: Colors.lightGray }
      }}
    >
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="signup" component={SignupScreen} />
      <Stack.Screen name="home" component={Homepage} />
      <Stack.Screen name="course-details" component={CourseDetails} />
      <Stack.Screen name="course-chapter" component={CourseChapter} />
      <Stack.Screen name="course-video" component={VideoPlayer} />
      <Stack.Screen name="no-content" component={NoContent} />
    </Stack.Navigator>
  );
};

export default HomeNavigations;
