import React, { useState } from 'react'
import { View,Text,FlatList,Image } from 'react-native'
import {BasicCourseData} from '../data/BasicCourseData'
function CourseListAdvance() {
    const [courseList,setCourseList]=useState(BasicCourseData.data)
  return (
    <View style={{marginTop:10}}>
            <Text style={{fontSize:20,fontWeight:'bold',marginBottom:3}}>Basic Courses</Text>
            <FlatList horizontal={true} showsHorizontalScrollIndicator={false}  data={courseList} renderItem={({item})=>(
                        <View style={{backgroundColor:'#fff',marginRight:10,borderRadius:10}}>
                            <Image source={{uri:item.image}} style={{width:210,height:100,borderRadius:10}}/>
                            <View style={{padding:10,fontWeight:'bold',fontSize:15}}><Text>{item.name}</Text></View>
                        </View>
                    )}/>
        </View>
  )
}

export default CourseListAdvance;
