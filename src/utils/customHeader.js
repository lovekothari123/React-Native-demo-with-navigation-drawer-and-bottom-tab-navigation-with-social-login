import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import stylesCommon from '../utils/stylesCommon.js';
import colors from '../utils/colors';
import NavigationService from '../navigation/NavigationService';

const Header = props => (
  <View style={stylesCommon.tabHeaderContainer}>
    {/* <View
      style={{
        flex: 0.2,
        flexDirection: 'row'
      }}
    >
      <TouchableOpacity onPress={() => NavigationService.goBack()}>
        <Icon style={[stylesCommon.headerLeftImage, { color: colors.white }]} size={25} name={'keyboard-arrow-left'} />
      </TouchableOpacity>
    </View>
    <View style={{ flex: 0.6 }}>
      <Text style={stylesCommon.headerTextStyle}> {props.heading} </Text>
    </View>
    <View
      style={{
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
      }}
    /> */}
  </View>
);

export default Header;
