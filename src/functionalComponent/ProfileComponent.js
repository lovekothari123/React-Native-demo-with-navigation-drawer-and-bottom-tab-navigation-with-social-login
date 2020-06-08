/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {Fragment, useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  BackHandler,
} from 'react-native';
import {withNavigationFocus} from 'react-navigation';
import {AppToolbar} from '../components/AppToolbar';
import StatusbarView from '../components/StatusBarComponentView';

import UtilStyles from '../utils/stylesCommon';
import {connect} from 'react-redux';

const ProfileComponent = props => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [props.navigation]);

  const handleBackButton = () => {
    BackHandler.exitApp();
    return true;
  };

  return (
    <Fragment>
      <SafeAreaView style={UtilStyles.SafeAreaContainer}>
        <ScrollView
          keyboardShouldPersistTaps
          contentContainerStyle={{flexGrow: 1}}
          style={localStyles.backGroundColorView}>
          <StatusbarView />

          
            <AppToolbar title={true} />
            <Text>ProfileComponent</Text>
         
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const localStyles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS == 'ios' ? 20 : 0,
  },
});

export default connect()(withNavigationFocus(ProfileComponent));
