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

class ThirdScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      reportData : [],
    }
  }
   componentDidMount(){
    let url = "https://sno-api.herokuapp.com/resorts";
    fetch(url, {
      method:'GET',
      headers:{
        Accept : 'application/json',
        'Content-Type' : 'application/json'
      },
    })
    .then(async (res) => {
      let response = await res.json();
      this.setState({reportData : response.resorts});
    })
  }

  render(){
    return (
      <View style={{flex:1,  justifyContent:'center', alignItems:'center'}}>
        {
          this.state.reportData.length > 0 && (
            <View>
              <View style={{ flexDirection:'row'}}>
                <Text style={{textAlign:'center', fontSize:15}}>id: </Text>
                <Text style={{textAlign:'center', fontSize:15}}>{this.state.reportData[0].id}</Text>
              </View>
              <View style={{ flexDirection:'row'}}>
                <Text style={{textAlign:'center', fontSize:15}}>name: </Text>
                <Text style={{textAlign:'center', fontSize:15}}>{this.state.reportData[0].name}</Text>
              </View>
              <View style={{ flexDirection:'row'}}>
                <Text style={{textAlign:'center', fontSize:15}}>snow_fall: </Text>
                <Text style={{textAlign:'center', fontSize:15}}>{this.state.reportData[0].snow_fall}</Text>
              </View>
              <View style={{ flexDirection:'row'}}>
                <Text style={{textAlign:'center', fontSize:15}}>main_parking: </Text>
                <Text style={{textAlign:'center', fontSize:15}}>{this.state.reportData[0].main_parking}</Text>
              </View>
            </View>
          )
        }
      </View>
      )
  }
}
export default ThirdScreen;
