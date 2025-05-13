import React, { useEffect,useState } from 'react'
import { View,Text,TouchableOpacity, Dimensions, ProgressBarAndroidBase } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native';
import Colors from '../Colors';
import ProgressBar from './ProgressBar'
function CourseChapter() {
    let chapterRef;
    const param=useRoute().params;
    const [run,setRun]=useState(false);
    const [chapter,setChapter]=useState([]);
    const[currentIndex,setCurrentIndex]=useState(0);
    const[progress,setProgress]=useState(0);
    useEffect(()=>{
     setProgress(0);
        setChapter(param.courseContent.TopicData);
   
    },[])
    function onClickNext(index){
    setRun(false);
    setProgress((index + 1) / chapter.length);
    try {
        chapterRef.scrollToIndex({ animated: true, index: index + 1 });
    } catch (e) {
        navigation.goBack();
    }
}
    const navigation=useNavigation();
  return (
    <View style={{padding:20,paddingTop:50,height:'100%'}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}><Ionicons name="arrow-back-sharp" size={24} color='black'/></TouchableOpacity>
        <ProgressBar progress={progress}/>
        <FlatList data={chapter} horizontal={true} pagingEnabled ref={(ref)=>{
            chapterRef=ref
        }} renderItem={({item,index})=>(
            <View style={{width:Dimensions.get('screen').width*0.85,height:'100%',marginRight:15,padding:10}}>
                <Text style={{fontSize:18,fontWeight:'bold',marginBottom:10}}>{item.name}</Text>
                <Text style={{lineHeight:20,marginBottom:20}}>{item.description}</Text>
                {item.input!=null?
                <View>
                <View style={{backgroundColor:Colors.black,padding:20,borderRadius:10}}>
                    <Text style={{color:Colors.white}}>{item.input}</Text>
                </View>
                <TouchableOpacity onPress={()=>setRun(true)} style={{backgroundColor:Colors.primary,padding:5,borderRadius:5,marginTop:10,display:'flex',flexDirection:'row',height:35,width:80}}>
                <Ionicons name='play-circle' size={20} color={Colors.white}/>
                <Text style={{textAlign:'center',marginLeft:5,color:Colors.white}}>Run</Text>
                        
                </TouchableOpacity>
                </View>:null}
                {run? <View style={{marginTop:15}}>
                    <Text style={{fontWeight:'bold'}}>Output</Text>
                    <View style={{backgroundColor:Colors.black,padding:20,borderRadius:10,marginTop:10}}>
                        <Text style={{color:Colors.white}}>{item.output}</Text>
                    </View>
                </View>:null}
                <TouchableOpacity onPress={()=>onClickNext(index)} style={{backgroundColor:Colors.primary,padding:10,borderRadius:7,position:'absolute',bottom:0,width:'110%'}}>
                    <Text style={{textAlign:'center',color:Colors.white}}>Next</Text>
                </TouchableOpacity>
            </View>
        )}/>
    </View>
  )
}

export default CourseChapter
