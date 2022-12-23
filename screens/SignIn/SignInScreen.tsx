import LogoDark from '../../assets/images/Logo-CCL-color2.png'
import LogoLight from '../../assets/images/Logo-CCL-color1.png'
import React from 'react'
import { View, Text, Image, StyleSheet, ImageSourcePropType} from 'react-native'
import useColorScheme from '../../hooks/useColorScheme';


const SignInScreen = () => {
  var Logo;
  if(useColorScheme() == "dark"){
    Logo = LogoDark;
  } else{
    Logo = LogoLight;
  }
  return (
    <View style={styles.root}>
      <Image source={Logo} style={styles.logo} resizeMode="contain"/>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  logo: {
    width: 500,
    height: 400,
  },
});

export default SignInScreen