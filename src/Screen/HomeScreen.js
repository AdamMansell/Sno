import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Platform,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'grey' }}>
      <TouchableOpacity style={{ padding: 20, width: '50%' }}
        onPress={() => {
          navigation.navigate('Second');
        }}
      >
        <Image
          style={{ width: screenWidth / 2, height: screenWidth / 2 }}
          source={require('../assets/images/Mt.Hood.jpg')}
        />
        <Text style={{ fontSize: 25, textAlign: 'center', color: 'white', paddingLeft: 45 }}>Mt.Hood</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

  titleText: {
    color: '#00FFFF',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


export default HomeScreen;
