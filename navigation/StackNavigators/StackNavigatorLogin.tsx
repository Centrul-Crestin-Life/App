import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import TabBarIcon from '../../hooks/useTabBarIcon';
import SignInScreen from '../../screens/SignIn/SignInScreen';

const StackLogin = createNativeStackNavigator();

export default function StackNavigatorLogin() {
  const colorScheme = useColorScheme();
 
  return (
      <StackLogin.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <StackLogin.Screen name="SignIn" component={SignInScreen}/>
      </StackLogin.Navigator>
  );
}