import React, { useCallback, useEffect,useState } from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from 'expo-router';
import { useRoute } from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe'
function VideoPlayer() {
      const navigation=useNavigation();
      const param=useRoute().params;
      const [videoChapter,setVideoChapter]=useState([]);
      const [playing,setPlaying]=useState(false)
      useEffect(()=>{
        setVideoChapter(param.courseContent)
      },[])
      const onStateChange=useCallback((state)=>{
        setPlaying(false);
      },[])
  return (
    <View style={{padding:20,marginTop:25}}>
<TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionicons name="arrow-back-sharp" size={24} color='black'/>
          </TouchableOpacity>    
          {videoChapter?<View>
            <Text style={{marginBottom:10,fontSize:20,fontWeight:'bold'}}>{videoChapter.name}</Text>
            <YoutubePlayer height={300} play={playing} videoId={"iee2TATGMyI"} onChangeState={onStateChange}/>
            <Text style={{fontWeight:'bold',marginBottom:10}}>Description</Text>
            <Text style={{lineHeight:20}}>{videoChapter?.description}</Text>
          </View>:null}    
          
    </View>
  )
}

export default VideoPlayer
