import React from 'react'
import { Text, View, StyleSheet,FlatList,Image, Dimensions } from 'react-native';
import { useState,useEffect } from 'react'
import { HomePageExplore } from '../data/HomePageExplore'
function Slider() {
    const [slider,setSlider]=useState(HomePageExplore.data);
  return (
    <View style={{marginTop:10}}>
        <FlatList horizontal={true} showsHorizontalScrollIndicator={false} data={slider} renderItem={({item})=>(
            <View>
                <Image source={{uri:item.image}} style={{width:Dimensions.get('screen').width*0.85,height:150,borderRadius:10,borderWidth:1,marginRight:15}}/>
            </View>
        )}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff', // Ensure it's not black
  }

})
export default Slider;
