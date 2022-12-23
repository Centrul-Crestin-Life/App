import { FontAwesome5 } from '@expo/vector-icons';
import * as React from 'react';
import {  Pressable, Image, View, Text, StyleSheet } from 'react-native';
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
import StackNavigatorLogin from './StackNavigators/StackNavigatorLogin';

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
        headerRight: () => <Image
              source={require('../assets/images/Icon-yellow.png' )}
              style={{height: 50, width: 50}}
              resizeMode='cover'
            />,
            /*height: 55, width: 55, marginLeft: 0, paddingRight: 500 */
        headerTitle: () => (
          <FontAwesome5
            color={Colors[colorScheme].text}
            style={styles.title}>
            Centrul Crestin Life
          </FontAwesome5>
        ),
        headerTitleAlign: 'left',
      })}
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} /> } >
      
      <Drawer.Screen name={StackNavigatorLogin.name} component={StackNavigatorLogin} />  
      <Drawer.Screen name="Centrul Crestin Life" component={BottomTabNavigatorGeneral} />
      <Drawer.Screen name="Tineret" component={BottomTabNavigatorTineret} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'normal'
  }
});  