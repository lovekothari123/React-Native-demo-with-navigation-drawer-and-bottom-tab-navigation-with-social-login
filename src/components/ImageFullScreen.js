import React from 'react';
import {StyleSheet, Text, ImageBackground} from 'react-native';
import FullScreenComponent from '../utils/stylesCommon';

export const ImageFullScreen = props => (
  <ImageBackground
    style={FullScreenComponent.backgroundImageHW}
    source={props.children}
  />
);
