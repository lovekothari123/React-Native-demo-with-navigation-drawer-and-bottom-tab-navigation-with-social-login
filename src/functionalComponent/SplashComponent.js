/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Easing,
  StatusBar,
  ImageBackground,
} from 'react-native';
import NavigationService from '../navigation/NavigationService';
import FullScreenComponent from '../utils/stylesCommon';
import {SpleshScrenBKImg} from '../utils/ImagesPath';
import StatusbarView from '../components/StatusBarComponentView';
import {SafeAreaView} from 'react-navigation';
import StringUtils from '../utils/strings';
import {AsyncStorage} from 'react-native';
import {ImageFullScreen} from '../components/ImageFullScreen'

const SplashComponent = props => {
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        _retrieveData();
      } catch (error) {
        console.log('RROROROOR==>', error);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const _storeData = async () => {
    try {
      await AsyncStorage.setItem(
        StringUtils.LOGGED_IN_USER,
        StringUtils.LOGIN_PENDING,
      );

      const isUserLoggedIn = await AsyncStorage.getItem(
        StringUtils.LOGGED_IN_USER,
      );
      console.log('asynch LOGGED IN SPLASH VALUE IS' + isUserLoggedIn);
    } catch (error) {
      // Error saving data
    }
  };

  const _retrieveData = async () => {
    try {
      console.log('asynch _retrieveData  ');

      const isUserLoggedIn = await AsyncStorage.getItem(
        StringUtils.LOGGED_IN_USER,
      );

      if (StringUtils.LOGGED_IN_USER !== isUserLoggedIn) {
        NavigationService.replace('Login', null);
        _storeData();
      } else if (StringUtils.LOGGED_IN_USER === isUserLoggedIn) {
        NavigationService.replace('DashBoard', null);
      } else {
        NavigationService.navigate('gameId', null);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  return (
    <SafeAreaView style={FullScreenComponent.SafeAreaContainer}>
      <StatusBar hidden />
      <ImageFullScreen>{SpleshScrenBKImg}</ImageFullScreen>
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  splashImage: {
    width: '30%',
    height: '30%',
  },

  gifContainer: {
    width: '60%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
});

export default SplashComponent;
