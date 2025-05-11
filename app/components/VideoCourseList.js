import React,{useState} from 'react'
import {View,Text, TouchableOpacity} from 'react-native'
import {VideoCourseData} from '../data/VideoCourseData'
import { useNavigation } from 'expo-router'
import { FlatList,Image } from 'react-native';
function VideoCourseList() {
      const navigation=useNavigation();
    const [videoList,setVideoList]=useState(VideoCourseData.data);
    // console.log(videoList)
    const onPressCourse=(courseInfo)=>{
      // console.log(courseInfo)
      navigation.navigate('course-details',{courseData:courseInfo})
    }
  return (
    <View style={{marginTop:15}}>
        <Text style={{fontSize:20,fontWeight:'bold',marginBottom:3}}>Video Course</Text>
        <FlatList horizontal={true} showsHorizontalScrollIndicator={false} data={videoList} renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>onPressCourse(item)}>
                        <Image source={{uri:item.image}} style={{width:200,height:100,borderRadius:10,borderWidth:1,marginRight:10}}/>
                    </TouchableOpacity>
                )}/>
    </View>
  )
}

export default VideoCourseList
