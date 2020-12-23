import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

function SecondScreen({navigation}){
  return (
  <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <View style={{flex:1, flexDirection:'row'}}>
      <TouchableOpacity onPress={()=>{navigation.navigate('Third')}}>
        <Text style={{textAlign:'center', fontSize:40}}>Meadows</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default SecondScreen;