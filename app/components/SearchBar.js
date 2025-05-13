import {View,Text,TextInput,StyleSheet} from 'react-native'
import React,{useContext} from 'react';
import Colors from '../Colors'
import {Ionicons} from '@expo/vector-icons'
export default function Home(){
    return(
        <View style={styles.container}>
            <Ionicons name='search' size={24} color={Colors.gray} style={{marginRight:10}}/>
            <TextInput placeholder='Search' value='Search'/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#fff',
        padding:10,
        borderRadius:10,
        elevation:2,
        marginTop:10,
        alignItems:'center'
    }
})