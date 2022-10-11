import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import TabBarIcon from '../../hooks/useTabBarIcon';
import AnnouncementScreen from '../../screens/Tineret/AnnouncementScreen';
import { GeneralStackParamList, TineretTabParamList, TineretTabScreenProps } from '../../types';


/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTabTineret = createBottomTabNavigator<TineretTabParamList>();

export default function BottomTabNavigatorTineret() {
  const colorScheme = useColorScheme();
 
  return (
    <BottomTabTineret.Navigator
      initialRouteName="Announcement"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          height: 50
        }
      }}>
      <BottomTabTineret.Screen
        name="Announcement"
        component={AnnouncementScreen}
        options={{
         title: 'Announcements',
         headerShown: false,
         tabBarIcon: ({ color }) => <TabBarIcon name="bullhorn" color={color} />,
         tabBarLabelStyle: {
          fontSize: 13
        }
       }}
      />
    </BottomTabTineret.Navigator>
  );
}