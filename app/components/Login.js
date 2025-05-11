import { Text, View,Image,StyleSheet, TouchableOpacity } from 'react-native';
// import Login from '../components/Login'
import Colors from '../Colors'
import {Ionicons} from '@expo/vector-icons'

export default function Login(){
    return(
         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
              <Image source={{uri:'https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?semt=ais_hybrid&w=740'}}/>
                <View style={styles.container}>
                  <Text style={styles.welcomeText}>Welcome to EduElevate</Text>
                  <Text style={{textAlign:'center', marginTop:80,fontSize:20}}>Login/Signup</Text>
                  <TouchableOpacity style={styles.button} >
                    <Ionicons name="logo-google" size={24} color='white' style={{marginRight:10}}/>
                    <Text style={{color:Colors.white}}>Sign In with Google</Text>
                  </TouchableOpacity>
                  </View>
                
            </View>
    )
}
