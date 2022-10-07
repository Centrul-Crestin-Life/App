/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName, Pressable, View, Text, Button } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/General/HomeScreen';
import CalendarScreen from '../screens/General/CalendarScreen';
import AnnouncementScreen from '../screens/Tineret/AnnouncementScreen';
import { GeneralStackParamList, GeneralTabParamList, GeneralTabScreenProps, TineretStackParamList, TineretTabParamList, TineretTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { color } from 'react-native-reanimated';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      //linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTabGeneral = createBottomTabNavigator<GeneralTabParamList>();

function BottomTabNavigatorGeneral() {
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
    </BottomTabGeneral.Navigator>
  );
}

const BottomTabTineret = createBottomTabNavigator<TineretTabParamList>();

function BottomTabNavigatorTineret() {
  const colorScheme = useColorScheme();

  return (
    <BottomTabTineret.Navigator
      initialRouteName="Announcement"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTabTineret.Screen
        name="Announcement"
        component={AnnouncementScreen}
        options={({ navigation }: TineretTabScreenProps<'Announcement'>) => ({
          tabBarIcon: ({ color }) => <TabBarIcon name="church" color={color} />,
        })}
      />
    </BottomTabTineret.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome5>['name'];
  color: string;
}) {
  return <FontAwesome5 size={30} style={{ marginBottom: -3 }} {...props} />;
}

function MenuBar(navigation: any, colorScheme: NonNullable<ColorSchemeName>){
  return <Pressable
    onPress={() => navigation.navigate('Modal')}
    style={({ pressed }) => ({
      opacity: pressed ? 0.5 : 1,
    })}>
    <FontAwesome5
      name="bars"
      size={25}
      color={Colors[colorScheme].text}
      style={{ marginLeft: 15 }}
    />
  </Pressable>
}

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>

  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} /> } >
        
      <Drawer.Screen name="General" component={BottomTabNavigatorGeneral} />
      <Drawer.Screen name="Tineret" component={BottomTabNavigatorTineret} />
    </Drawer.Navigator>
  );
}