import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { View,Text } from 'react-native'
import Homepage from '../components/Homepage'
const HomeNavigations = () => {
    const Stack=createNativeStackNavigator();
  return (
    <View>
        <Stack.Navigator>
            <Stack.Screen name="home" component={Homepage}></Stack.Screen>
            </Stack.Navigator> 
    </View>
  )
}

export default HomeNavigations
