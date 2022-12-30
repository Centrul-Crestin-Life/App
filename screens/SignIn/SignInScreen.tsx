import LogoDark from '../../assets/images/Logo-CCL-color2.png'
import LogoLight from '../../assets/images/Logo-CCL-color1.png'
import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, ImageSourcePropType} from 'react-native'
import useColorScheme from '../../hooks/useColorScheme'
import CustomInput from '../../components/LoginScreen/CustomInput'


const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  var Logo;
  if(useColorScheme() == "dark"){
    Logo = LogoDark;
  } else{
    Logo = LogoLight;
  }

  return (
    <View style={styles.root} >
      <Image source={Logo} style={styles.logo} resizeMode="cover"/>

      <CustomInput placeholder="Username" value={username} setValue={setUsername} secureTextEntry={false} />
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    
  },
  logo: {
    width: '100%',
    height: '55%',
  },
});

export default SignInScreen