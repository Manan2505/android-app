import React,{useState} from 'react'
import { View,Text,FlatList,Image } from 'react-native'
import {AdvanceCourseData} from '../data/AdvanceCourseData'
import { useNavigation } from 'expo-router'
import { TouchableOpacity } from 'react-native'
function CourseListAdvance() {

    const [courseList,setCourseList]=useState(AdvanceCourseData.data)
        const navigation=useNavigation();
        const onPressCourse=(courseInfo)=>{
          // console.log(courseInfo)
          navigation.navigate('course-details',{courseData:courseInfo})
        }
  return (
    <View style={{marginTop:10}}>
            <Text style={{fontSize:20,fontWeight:'bold',marginBottom:3}}>App Development</Text>
            <FlatList horizontal={true} showsHorizontalScrollIndicator={false}  data={courseList} renderItem={({item})=>(
                        <TouchableOpacity style={{backgroundColor:'#fff',marginRight:10,borderRadius:10}} onPress={()=>onPressCourse(item)}>
                            <Image source={{uri:item.image}} style={{width:250,height:100,borderRadius:10}}/>
                            <View style={{padding:10,fontWeight:'bold',fontSize:15}}><Text>{item.name}</Text></View>
                        </TouchableOpacity>
                    )}/>
        </View>
  )
}

export default CourseListAdvance;
