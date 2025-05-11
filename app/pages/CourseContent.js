import React from 'react'
import {View,Text} from 'react-native'
import {CourseContentData} from '../data/CourseContentData'
import { FlatList } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import Colors from '../Colors'
function CourseContent() {
    const data=CourseContentData.Topic;
    // console.log(data)
  return (
    <View style={{marginTop:10}}>
        <Text style={{fontWeight:'bold',fontSize:16}}>Course Content</Text>
        <FlatList style={{marginTop:10}} data={data} renderItem={({item,index})=>(
            <View style={{display:'flex',flexDirection:'row',backgroundColor:'#fff',marginBottom:5,padding:13,alignItems:'center',borderRadius:5}}>
                <Text style={{fontWeight:'bold',fontSize:20,color:Colors.gray,marginRight:20}}>{index+1}</Text>
                <Text style={{fontSize:15,fontWeight:'bold'}}>{item.Topic}</Text>
                <Ionicons name="play-circle" style={{position:'absolute',right:5}} size={24} color={Colors.primary}/>
            </View>
        )}/>
    </View>
  )
}

export default CourseContent
