/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import LinkingConfiguration from './LinkingConfiguration';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import BottomTabNavigatorGeneral from './BottomTabNavigators/BottomTabNavigatorGeneral'
import BottomTabNavigatorTineret from './BottomTabNavigators/BottomTabNavigatorTineret'

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      //linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
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
  const colorScheme = useColorScheme();

  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerLeft: () => <Pressable
          onPress={() => navigation.openDrawer()}
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
      })}
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} /> } >
      
        
      <Drawer.Screen name="General" component={BottomTabNavigatorGeneral} />
      <Drawer.Screen name="Tineret" component={BottomTabNavigatorTineret} />
    </Drawer.Navigator>
  );
}