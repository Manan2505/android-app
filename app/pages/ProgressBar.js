import React from 'react'
import {View,Text, Dimensions} from 'react-native'
import * as Progress from 'react-native-progress'
function ProgressBar({progress}) {
  return (
    <View>
        <Progress.Bar progress={progress} width={Dimensions.get('screen').width*0.85}/>
    </View>
  )
}
export default ProgressBar;
