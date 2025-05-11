import React,{useState} from 'react'
import {View,Text} from 'react-native'
import {VideoCourseData} from '../data/VideoCourseData'
import { FlatList,Image } from 'react-native';
function VideoCourseList() {
    const [videoList,setVideoList]=useState(VideoCourseData.data);
    // console.log(videoList)
  return (
    <View style={{marginTop:15}}>
        <Text style={{fontSize:20,fontWeight:'bold',marginBottom:3}}>Video Course</Text>
        <FlatList horizontal={true} showsHorizontalScrollIndicator={false} data={videoList} renderItem={({item})=>(
                    <View>
                        <Image source={{uri:item.image}} style={{width:200,height:100,borderRadius:10,borderWidth:1,marginRight:10}}/>
                    </View>
                )}/>
    </View>
  )
}

export default VideoCourseList
