import { FontAwesome5 } from '@expo/vector-icons';
import * as React from 'react';
import {  Pressable } from 'react-native';
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

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function MenuDrawer() {
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
        </Pressable>,
        headerTitleAlign: 'center'
      })}
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} /> } >
      
        
      <Drawer.Screen name="General" component={BottomTabNavigatorGeneral} />
      <Drawer.Screen name="Tineret" component={BottomTabNavigatorTineret} />
    </Drawer.Navigator>
  );
}