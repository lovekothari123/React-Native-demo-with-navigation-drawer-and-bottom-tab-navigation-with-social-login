/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import AppContainer from '../containers/AppContainer';
import {Provider} from 'react-redux';
import configureStore from '../redux/store';
import messaging from '@react-native-firebase/messaging';
import {AsyncStorage, Platform, Alert} from 'react-native';
import StringUtils from '../utils/strings';
import NavigationService from '../navigation/NavigationService';


messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Background' + JSON.stringify(remoteMessage));
});

const PhalanxApp = props => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('I forground' + JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  useEffect(() => {
    console.log('Platform.OS is @@@ TOKEN:' + Platform.OS);
    registerAppWithFCM();
    pushNotificationFirebase();
   // _retrieveData();

    async function registerAppWithFCM() {
      await messaging().registerDeviceForRemoteMessages();
    }
  }, [pushNotificationFirebase]);

  const _retrieveData = async () => {
    try {
      console.log('asynch _retrieveData  ');

      const isUserLoggedIn = await AsyncStorage.getItem(
        StringUtils.LOGGED_IN_USER,
      );

      console.log('asynch is user logged in ' + isUserLoggedIn);

      if (StringUtils.LOGGED_IN_USER !== isUserLoggedIn) {
        //NavigationService.replace('Login', null);
        NavigationService.navigate('SignUp', null);
        _storeData();
      } else if (StringUtils.LOGGED_IN_USER === isUserLoggedIn) {
        NavigationService.replace('DashBoard', null);
        // NavigationService.navigate('SponsorDetailsScreen', null);
        // congrats
      } else {
        console.log('Login in Log');
        alert('Login Screen Dashboard');
        //NavigationService.navigate('gameId', null);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

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

  async function checkPermission() {
    const enabled = await messaging().hasPermission();
    // const enabled = await firebase.messaging().hasPermission();
    console.log('check Premission ', enabled);
    if (enabled === messaging.AuthorizationStatus.AUTHORIZED) {
      getToken();
    } else if (enabled === messaging.AuthorizationStatus.NOT_DETERMINED) {
      requestPermission();
    } else {
      console.log('Denied');
    }
  }

  async function getToken() {
    fcmToken = await messaging().getToken();
    if (fcmToken) {
      // user has a device token
      saveToken(fcmToken);
      //Call api save token
    }
  }

  async function requestPermission() {
    try {
      const premissionStatus = await messaging().requestPermission();
      // User has authorised
      if (premissionStatus === messaging.AuthorizationStatus.AUTHORIZED) {
        getToken();
      } else if (premissionStatus === messaging.AuthorizationStatus.DENIED) {
        console.log('Permission Status Denied' + premissionStatus);
      } else {
        console.log('Permission Status' + premissionStatus);
      }
    } catch (error) {
      // User has rejected permissions
      console.warn('permission rejected');
    }
  }

  const pushNotificationFirebase = async () => {
    // console.log("PushNotification @@@1 TOKEN:");

    try {
      checkPermission();
    } catch (ex) {
      console.log('PushNotification @@23 is push notification Exp is ' + ex);
      alert('is ' + ex);
    }
  };

  const saveToken = async fcmToken => {
    console.log('MY FCM  ' + fcmToken);

    await AsyncStorage.setItem(StringUtils.DEVICE_TOKEN_FIREBASE, fcmToken);
    const deviceId = await AsyncStorage.getItem(
      StringUtils.DEVICE_TOKEN_FIREBASE,
    );
    console.log(
      'PushNotification-> PushNotification @@@2 emailAddress number is ' +
        deviceId,
    );
  };

  return (
    
   <Provider store={configureStore()}>
      <AppContainer />
    </Provider>
   
  );
};

export default PhalanxApp;
