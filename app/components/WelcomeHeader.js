import { Text, View,StyleSheet,Image } from 'react-native';


export default function WelcomeHeader(){
    // const {userData,setuserData} = useContext(AuthContext);
    return(
        <View style={styles.container}>
           <View>
            <Text style={{fontSize:20,fontWeight:'bold'}}>EduElevate</Text>
           </View>
           <Image source={{uri:'https://static.vecteezy.com/system/resources/thumbnails/025/869/583/small_2x/profile-image-of-man-avatar-for-social-networks-with-half-circle-fashion-bright-illustration-in-trendy-style-vector.jpg'}} style={{width:50,height:40,borderRadius:100,marginTop:8}}/>
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