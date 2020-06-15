import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Colors from '../utils/colors';

export const CustomText = props => (
  <Text style={[styles.text, props.style]}>{props.children}</Text>
);
export const CustomTextNormalFont = props => (
  <Text style={[styles.textFont, props.style]}>{props.children}</Text>
);
const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto-Medium',
    color: Colors.white,
  },
  textFont: {
    fontFamily: 'Roboto-Light',
    color: Colors.white,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 'normal',
  },
});
