/* eslint-disable no-unused-vars */
import React, {Fragment, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  BackHandler,
  FlatList,
  Image,
  YellowBox,
  Linking,
  Animated,
  ScrollView,
  Platform,
} from 'react-native';
import UtilStyles from '../utils/stylesCommon';
import {AppToolbar} from '../components/AppToolbar';
import StatusbarView from '../components/StatusBarComponentView';
import {connect} from 'react-redux';
import {withNavigationFocus} from 'react-navigation';

YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);

let rankCount = 0;

const LeaderboardComponent = props => {
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
        <StatusbarView />
        <AppToolbar title={true} />
        <Text>LeaderboardComponent</Text>
      </SafeAreaView>
    </Fragment>
  );
};

const localStyles = StyleSheet.create({
  dashboardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect()(withNavigationFocus(LeaderboardComponent));
