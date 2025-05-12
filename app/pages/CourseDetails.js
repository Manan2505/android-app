import React, { useEffect,useState } from 'react'
import { View,Text,StyleSheet,Image, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons'
import Colors from '../Colors';
import CourseContent from './CourseContent'
import { useNavigation } from 'expo-router';
function CourseDetails({route}) {
    const { courseData, courseType } = route.params;
  const param=useRoute().params;
  const [course,setCourse]=useState([]);
  const navigation=useNavigation();
  useEffect(()=>{
// console.log(param.courseData)
setCourse(param.courseData);
  },[])
  return (
    <View style={styles.container}>
        {/* <Text>Course Details</Text> */}
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionicons name="arrow-back-sharp" size={24} color='black'/>
          </TouchableOpacity>
        <View>
          <Text style={{fontSize:20,fontWeight:'bold'}}>{course.name}</Text>
          <Text style={{color:Colors.gray}}>By Manan Arora</Text>
          <Image source={{uri:course.image}} style={{height:150,marginTop:10,borderRadius:10}}/>
          <Text style={{marginTop:10,fontWeight:'bold',fontSize:16}}>About Course</Text>
          <Text numberOfLines={3} style={{color:Colors.gray}}>{course.description}</Text>
        </View>
        <CourseContent courseType={courseType}/>
    </View>
  )
}

export default CourseDetails
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff', // Ensure it's not black
    padding:20,
    paddingTop:30
  },
  text: {
    color: 'black',
    fontSize: 24,
  },
});
