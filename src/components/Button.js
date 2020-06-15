import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Image, View} from 'react-native';
import Color from '../utils/colors';
import UtilStyles from '../utils/stylesCommon';

export const LoginButton = ({
  onPress,
  children,
  isPressed,
  onPressIn,
  onPressOut,
  disabled,
  source,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={disabled}
      style={localStyles.GooglePlusStyle}
      activeOpacity={0.5}>
      <View style={localStyles.centerImages}>
      <Image source={source} style={localStyles.ImageIconStyle} />
      <View style={localStyles.SeparatorLine} />

      <Text style={localStyles.TextStyle}>{children}</Text>
      </View>
      
    </TouchableOpacity>
  );
};


const localStyles = StyleSheet.create({
  centerImages: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    
  },
  GooglePlusStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 48,
    width: 300,
    borderRadius: 30,
    margin: 5,
    textAlign: 'center',
    
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'center',
    marginBottom: 10,
    
  },
  TextStyle: {
    color: '#000',
    marginBottom: 4,
    textAlign:'center',
    fontFamily: 'Roboto-Medium',
  },
  SeparatorLine: {
    width: 4,
    height: 40,
  },
  
});


