import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import Color from '../utils/colors';
import UtilStyles from '../utils/stylesCommon';

const ButtonIcon = ({ onPress, children, isPressed, onPressIn, onPressOut,source }) => {
  console.log('children value is '+children)
  return (
    <TouchableOpacity
    activeOpacity={1}
    onPress={onPress}
    onPressIn={onPressIn}
    onPressOut={onPressOut}

      style={[
        UtilStyles.shadowView,
        !isPressed ? UtilStyles.buttonIconView: UtilStyles.buttonColorChangedView,
        // UtilStyles.buttonIconView,
      ]}
      onPress={onPress}>

      <View style={localStyles.parentFlexView}>
        <View style={localStyles.imageProportationView}>
          <Image style={localStyles.imageWidthHeightView} source={source}/>
        </View>
        <View style={localStyles.textProporationView}>
          <Text style={localStyles.buttonTextView}>{children}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  buttonTextView: {
    fontSize: 17,
    marginLeft:8,
    marginTop:3,
    color: Color.button_text_color,
    fontFamily: 'gothamBold',
    textAlignVertical:'center'
  },

  imageProportationView: {
    flex: 0.15,
    alignItems:'center'
  },
  imageWidthHeightView: {
    width: 35,
    height: 35,
    marginStart:5,
  },

  textProporationView: {
    flex: 0.85,
  },

  parentFlexView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center'
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

export default ButtonIcon;
