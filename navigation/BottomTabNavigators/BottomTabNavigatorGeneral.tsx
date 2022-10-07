import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import TabBarIcon from '../../hooks/useTabBarIcon';
import HomeScreen from '../../screens/General/HomeScreen';
import CalendarScreen from '../../screens/General/CalendarScreen';
import MediaScreen from '../../screens/General/MediaScreen';
import { GeneralStackParamList, GeneralTabParamList, GeneralTabScreenProps } from '../../types';


/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
 const BottomTabGeneral = createBottomTabNavigator<GeneralTabParamList>();

 export default function BottomTabNavigatorGeneral() {
   const colorScheme = useColorScheme();
 
   return (
     <BottomTabGeneral.Navigator
       initialRouteName="Home"
       screenOptions={{
         tabBarActiveTintColor: Colors[colorScheme].tint,
       }}>
       <BottomTabGeneral.Screen
         name="Home"
         component={HomeScreen}
         options={({ navigation }: GeneralTabScreenProps<'Home'>) => ({
           tabBarIcon: ({ color }) => <TabBarIcon name="church" color={color} />,
         })}
       />
       <BottomTabGeneral.Screen
         name="Calendar"
         component={CalendarScreen}
         options={{
           title: 'Calendar',
           tabBarIcon: ({ color }) => <TabBarIcon name="calendar-alt" color={color} />,
         }}
       />
       <BottomTabGeneral.Screen
         name="Media"
         component={MediaScreen}
         options={{
           title: 'Media',
           tabBarIcon: ({ color }) => <TabBarIcon name="play-circle" color={color} />,
         }}
       />
     </BottomTabGeneral.Navigator>
   );
 }