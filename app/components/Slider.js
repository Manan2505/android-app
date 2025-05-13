import React from 'react'
import { Text, View, StyleSheet,FlatList,Image, Dimensions } from 'react-native';
import { useState,useEffect } from 'react'
import { HomePageExplore } from '../data/HomePageExplore'
function Slider() {
    const [slider,setSlider]=useState(HomePageExplore.data);
  return (
    <View style={{marginTop:10}}>
        <Image source={require('../assets/banner.png')} style={{width:'100%',height:240,borderRadius:10,marginRight:15}}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff', // Ensure it's not black
  }

})
export default Slider;
