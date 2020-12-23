/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/Screen/HomeScreen';
import SecondScreen from './src/Screen/SecondScreen';
import ThirdScreen from './src/Screen/ThirdScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title : 'Mountains'}}/>
        <Stack.Screen name="Second" component={SecondScreen} options={{title : 'Mt.Hood'}} />
        <Stack.Screen name="Third" component={ThirdScreen} options={{title : 'Meadows Resort'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
