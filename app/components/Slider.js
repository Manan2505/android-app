import React from 'react'
import { Text, View, StyleSheet,FlatList,Image, Dimensions } from 'react-native';
import { useState,useEffect } from 'react'
import { HomePageExplore } from '../data/HomePageExplore'
function Slider() {
    const [slider,setSlider]=useState(HomePageExplore.data);
  return (
    <View style={{marginTop:10}}>
        <Image source={require('../assets/banner.png')} style={{width:Dimensions.get('screen').width*0.89,height:160,borderRadius:10,borderWidth:1,marginRight:15}}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff', // Ensure it's not black
  }

})
export default Slider;
