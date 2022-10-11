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
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          height: 50
        }
      }}>
      <BottomTabGeneral.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="church" color={color} />,
          tabBarLabelStyle: {
            fontSize: 13
          }
        }}
      />
      <BottomTabGeneral.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          title: 'Calendar',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar-alt" color={color} />,
          tabBarLabelStyle: {
            fontSize: 13,
          }
        }}
      />
      <BottomTabGeneral.Screen
        name="Media"
        component={MediaScreen}
        options={{
          title: 'Media',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="play-circle" color={color} />,
          tabBarLabelStyle: {
            fontSize: 13
          }
        }}
      />
    </BottomTabGeneral.Navigator>
  );
}