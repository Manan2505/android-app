import {View,Text} from 'react-native'
import React,{useContext} from 'react';
import {Button} from 'react-native'
import VideoCourseList from './VideoCourseList'
import WelcomeHeader from './WelcomeHeader'
import SearchBar from './SearchBar'
import Slider from './Slider'
import CourseListBasic from './CourseListBasic'
import CourseListAdvance from './CourseListAdvance'
import { ScrollView } from 'react-native';
export default function Homepage(){
    // const {userData,setuserData} = useContext(AuthContext);
    return(
        <ScrollView style={{padding:20}}>
             <WelcomeHeader/>
            <SearchBar/> 
            <Slider/>
            <VideoCourseList/>
            <CourseListBasic/>
            <CourseListAdvance/>
        </ScrollView>
    )
}