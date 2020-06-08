import React, {useState, useEffect, Fragment} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  BackHandler,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from 'react-native';
import UtilStyles from '../utils/stylesCommon';
import NavigationService from '../navigation/NavigationService';


// import { createStackNavigator } from 'react-navigation';



const LoginComponent = props => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);

  console.disableYellowBox = true;

  const handleBackButton = () => {
    BackHandler.exitApp();
    return true;
  };

  return (
    <Fragment>
      <SafeAreaView style={UtilStyles.SafeAreaContainer}>
        <TouchableOpacity
          onPress={() => {
            NavigationService.replace('DashBoard', null);
          }}>
          <Text>Login Screen</Text>
        </TouchableOpacity>
        <Text>.</Text>
        <Text>.</Text>
 
      </SafeAreaView>
    </Fragment>
  );
};

const localStyles = StyleSheet.create({
  logoImage: {
    height: 68,
    width: 234,
    alignSelf: 'center',
    marginTop: 35,
    backgroundColor:'red'
  },
});

export default LoginComponent;
