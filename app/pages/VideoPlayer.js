import React, { useCallback, useEffect,useState } from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from 'expo-router';
import { useRoute } from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe'
function VideoPlayer() {
  // console.log("NIOUH")
      const navigation=useNavigation();
      const param=useRoute().params;
      const [videoChapter,setVideoChapter]=useState([]);
      const [playing,setPlaying]=useState(false)
      useEffect(()=>{
        setVideoChapter(param.courseData)
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
            {/* https://youtu.be/jufPO-r6bt0?si=D_mOuzWKezKHrDv1 */}
            <Text style={{marginBottom:10,fontSize:20,fontWeight:'bold'}}>{videoChapter.name}</Text>
            <YoutubePlayer height={250} play={playing} videoId={"jufPO-r6bt0"} onChangeState={onStateChange}/>
            <Text style={{fontWeight:'bold',marginBottom:10}}>Description</Text>
            <Text style={{lineHeight:20}}>{videoChapter?.description}</Text>
          </View>:null}    
          
    </View>
  )
}

export default VideoPlayer
