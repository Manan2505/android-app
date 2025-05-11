import { Text, View,StyleSheet,Image } from 'react-native';


export default function WelcomeHeader(){
    // const {userData,setuserData} = useContext(AuthContext);
    return(
        <View style={styles.container}>
           <View>
             <Text>Hey,</Text>
            <Text style={{fontSize:20,fontWeight:'bold'}}>User</Text>
           </View>
           <Image source={{uri:'https://img.freepik.com/premium-photo/best-amazing-wonderful-this-photo-take-this-picture-your-work-ai-generated-top-lovely-photo_1169327-105130.jpg'}} style={{width:40,height:40,borderRadius:100}}/>
        </View>
        
    )
}
const styles=StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})