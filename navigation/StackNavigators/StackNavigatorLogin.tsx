import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import TabBarIcon from '../../hooks/useTabBarIcon';
import AnnouncementScreen from '../../screens/Tineret/AnnouncementScreen';

const StackLogin = createNativeStackNavigator();

function LoginScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
    </View>
  );
}

export default function StackNavigatorLogin() {
  const colorScheme = useColorScheme();
 
  return (
      <StackLogin.Navigator>
        <StackLogin.Screen name="Login" component={LoginScreen} />
      </StackLogin.Navigator>
  );
}