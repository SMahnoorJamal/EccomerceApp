

import React from 'react';
import {
  StyleSheet, Image, View, Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserPage from '../classes/UserPage';
import MutualScreen from '../classes/MutualScreen';
import ProfileScreen from '../classes/ProfileScreen';
import PhoneLoginScreen from '../classes/LoginScreen';
import OtpVerificationScreen from '../classes/OtpVerification';

const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Stamps"
        screenOptions={{
          headerShown: false,
        }}
      >
          <Stack.Screen name="Stamps" component={ProfileScreen}/>
       <Stack.Screen
          name="UserPage"
          component={UserPage} />
 
 <Stack.Screen
          name="Mutual"
          component={MutualScreen}/>
           <Stack.Screen
          name="Login"
          component={PhoneLoginScreen}/>
           <Stack.Screen
          name="OtpVerification"
          component={OtpVerificationScreen}/>
      </Stack.Navigator>



    </NavigationContainer>


  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;