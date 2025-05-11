import {View,Text} from 'react-native'
import React,{useContext} from 'react';
import {Button} from 'react-native'
// import Services from '../Shared/Services';
// import {AuthContext} from '../Context/AuthContext';
import WelcomeHeader from './WelcomeHeader'
import SearchBar from './SearchBar'
import Slider from './Slider'
export default function Homepage(){
    // const {userData,setuserData} = useContext(AuthContext);
    return(
        <View style={{padding:20}}>
             <WelcomeHeader/>
            <SearchBar/> 
            <Slider/>
        </View>
    )
}