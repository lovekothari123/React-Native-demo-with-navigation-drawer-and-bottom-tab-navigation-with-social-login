import React from 'react';
import Colors from '../utils/colors';
import {TextInput, View, StyleSheet, Text, Image} from 'react-native';
import UtilStyles from '../utils/stylesCommon';
const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  editable,
  defaultValue,
  showError,
  autoFocus,
  onSubmitEditing,
  inputRef,
  autoCapitalize,
  maxLength,
}) => {
  // console.log('Input txt refInput is' +inputRef);
  return (
    <View>
      <View
        style={[
          UtilStyles.viewTextInputContainer,
          showError ? UtilStyles.redBorderColor : UtilStyles.grayBorderColor,
        ]}>
        <View style={localStyles.inputContainer}>
          <TextInput
            style={[
              UtilStyles.textInput,
              showError ? UtilStyles.textColorRed : UtilStyles.textColorBlack,
              showError ? localStyles.inputFlex : localStyles.inputDefaultFlex,
            ]}
            editable={editable}
            placeholder={placeholder}
            placeholderTextColor={
              showError ? Colors.error_background_color : Colors.inputBorder
            }
            onChangeText={onChangeText}
            ref={(r) => { 
              inputRef && inputRef(r) 
            }}
            onSubmitEditing={onSubmitEditing}
            underlineColorAndroid="transparent"
            value={value}
            maxLength={maxLength}
            autoFocus={autoFocus}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            returnKeyType="next"
            clearButtonMode="never"
            blurOnSubmit={false}
            defaultValue={defaultValue}
            autoCapitalize={autoCapitalize}></TextInput>
          <Image
            style={[
              showError ? localStyles.imageContainer : localStyles.hideView,
            ]}
            source={require('../res/images/inputErrorIcon.png')}
          />
        </View>
      </View>

      {label !== undefined ? (
        <View style={localStyles.profilePlaceholderTxt}>
          <Text style={UtilStyles.textErrorMsgColorAndSizeContainer}>
            {label}
          </Text>
        </View>
      ) : null}
    </View>
  );
};
const localStyles = StyleSheet.create({
  imageContainer: {
    width: 23,
    height: 23,
    resizeMode: 'contain',
    flex: 0.1,
    marginEnd: 5,
  },

  profilePlaceholderTxt: {
    marginTop: 8,
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hideView: {
    width: 0,
    height: 0,
    display: 'none',
  },
  inputFlex: {flex: 0.9},
  inputDefaultFlex: {flex: 1},
});

export {Input};
