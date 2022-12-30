import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import useColorScheme from '../../hooks/useColorScheme'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  var containerStyle;
  var textInputStyle;
  var placeholderColor;

  if(useColorScheme() == "dark"){
    containerStyle = styles.containerDark;
    textInputStyle = styles.textInputDark;
    placeholderColor = '#a3a3a3';
  } else{
    containerStyle = styles.containerLight;
    textInputStyle = styles.textInputLight;
    placeholderColor = 'grey';
  }

  return (
    <View style={containerStyle}>
      <TextInput 
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        secureTextEntry={secureTextEntry}
        style={textInputStyle}
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
    borderRadius: 5,

    paddingHorizontal: 10,
    paddingVertical: 6,
    marginVertical: 5
  },
  containerLight: {
    backgroundColor: 'white',
    width: '60%',

    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    paddingVertical: 6,
    marginVertical: 5
  },
  textInputDark:{
    color: 'white'
  },
  textInputLight:{
    color: 'black'
  }
})

export default CustomInput