import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import useColorScheme from '../../hooks/useColorScheme'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  var containerStyle;

  if(useColorScheme() == "dark"){
    containerStyle = styles.containerDark;
  } else{
    containerStyle = styles.containerLight;
  }

  return (
    <View style={containerStyle}>
      <TextInput 
        value={value}
        onChangeText={setValue}
        placeholder={placeholder} 
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  containerDark: {
    backgroundColor: '#404040',
    width: '60%',

    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 10,

    paddingHorizontal: 10,
    paddingVertical: 6,
    marginVertical: 5
  },
  containerLight: {
    backgroundColor: 'white',
    width: '60%',

    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 10,

    paddingHorizontal: 10,
    paddingVertical: 6,
    marginVertical: 5
  },
  input:{
    textShadowColor: 'white'
  }
})

export default CustomInput