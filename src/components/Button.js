import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Color from '../utils/colors';
import UtilStyles from '../utils/stylesCommon';


const Button = ({onPress, children, isPressed, onPressIn, onPressOut,disabled,stylesOfEditButtionOnly}) => {

console.log("bbutton is pressed "+ isPressed)
  return (
    <TouchableOpacity
    activeOpacity={1}
    onPress={onPress}
    onPressIn={onPressIn}
    onPressOut={onPressOut}
    disabled={disabled}

      style={[
        UtilStyles.shadowView,
        !isPressed ? UtilStyles.buttonView: UtilStyles.buttonColorChangedView
      ]}>
      
      <Text style={[stylesOfEditButtionOnly && stylesOfEditButtionOnly == true ? localStyles.buttonTextViewOnEditProfile:localStyles.buttonTextView]}>{children}</Text>
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  buttonTextView: {
    fontSize: 16,
    color: Color.button_text_color,
    fontFamily:'gothamBold',
    textAlign:'center',
    textTransform: 'uppercase',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },
  buttonTextViewOnEditProfile: {
    fontSize: 16,
    color: Color.button_text_color,
    fontFamily:'gothamBold',
    textAlign:'center',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
   // textTransform: 'uppercase',
  },

  

  //   shadowView:{
  //     shadowColor: "#000",
  //     shadowOffset: {
  //     width: 0,
  //     height: 2,
  // },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,

  //   elevation: 4,
  //   }
});

export default Button;
