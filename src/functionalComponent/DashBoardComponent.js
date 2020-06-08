/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {Fragment, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Animated,
  ScrollView,
  BackHandler,
  Alert,
  Share,
  FlatList,
  Image,
  AppState,
} from 'react-native';

import {withNavigationFocus} from 'react-navigation';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Colors from '../utils/colors';
import UtilStyles from '../utils/stylesCommon';
import Button from '../components/Button';
import StringUtils from '../utils/strings';


import StatusbarView from '../components/StatusBarComponentView';

import {AsyncStorage} from 'react-native';

const DashBoardComponent = props => {
  useEffect(() => {
   
   
    AppState.addEventListener('change', _handleAppStateChange);
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
      focusListener.remove();
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, [_handleAppStateChange, props.navigation]);

  const _handleAppStateChange = nextAppState => {
    if (appState.match(/inactive|background/) || nextAppState === 'active') {
    
    } else {
      if (nextAppState == 'active') {
       
      }
    }
    //  this.setState({appState: nextAppState});
  };

  

  const handleBackButton = () => {
    BackHandler.exitApp();
    return true;
  };

  const _storeData = async () => {
    try {
      await AsyncStorage.setItem(StringUtils.LOGGED_IN_USER, StringUtils.LOGIN);
    } catch (error) {
      console.log('DASHBOARD ERROR', error);
    }
  };

  return (
    <Fragment>
      <SafeAreaView style={UtilStyles.SafeAreaContainer}>
        <StatusbarView />

        <Text>DASHBOARD SCREEN</Text>
      </SafeAreaView>
    </Fragment>
  );
};

const localStyles = StyleSheet.create({
  dashboardContainer: {
    backgroundColor: Colors.white,
    padding: 10,
    height: '80%',
    borderRadius: 10,
  },
});



export default connect()(withNavigationFocus(DashBoardComponent));
// export default DashBoardComponent;
