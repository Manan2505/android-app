import React, { useState } from 'react'
import { View,Text,FlatList,Image } from 'react-native'
import {BasicCourseData} from '../data/BasicCourseData'
import { useNavigation } from 'expo-router'
import { TouchableOpacity } from 'react-native'
function CourseListBasic() {
    const [courseList,setCourseList]=useState(BasicCourseData.data)
    const navigation=useNavigation();
    const onPressCourse=(courseInfo)=>{
      console.log(courseInfo)
      // navigation.navigate('course-details',{courseData:courseInfo,courseType:"video"})
      navigation.navigate('course-video',{courseData:courseInfo})
    }
  return (
    <View style={{marginTop:10}}>
        <Text style={{fontSize:20,fontWeight:'bold',marginBottom:3}}>Video Lectures</Text>
        <FlatList horizontal={true} showsHorizontalScrollIndicator={false}  data={courseList} renderItem={({item})=>(
                    <TouchableOpacity style={{backgroundColor:'#fff',marginRight:10,borderRadius:10}} onPress={() => {
  if (item.id === 1) {
    onPressCourse(item);
  } else {
    navigation.navigate('no-content');
  }
}}
>
                        <Image source={{uri:item.image}} style={{width:250,height:100,borderRadius:10}}/>
                        <View style={{padding:10,fontWeight:'bold',fontSize:15}}><Text>{item.name}</Text></View>
                    </TouchableOpacity>
                )}/>
    </View>
  )
}

export default CourseListBasic;
