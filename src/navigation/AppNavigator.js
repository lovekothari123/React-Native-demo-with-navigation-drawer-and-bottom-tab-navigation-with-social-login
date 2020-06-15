/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Easing,
  Platform,
  Button,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import colors from '../utils/colors';
import Splash from '../functionalComponent/SplashComponent';
import LoginScreen from '../functionalComponent/LoginComponent';
import SignUpScreen from '../functionalComponent/LoginComponent';
import DashBoardScreen from '../functionalComponent/DashBoardComponent';
import LeaderBoardScreen from '../functionalComponent/LeaderboardComponent';
import ProfileScreen from '../functionalComponent/ProfileComponent';



const BottomNavigator = createMaterialBottomTabNavigator({
  DashBoard: {
    screen: DashBoardScreen,
    navigationOptions: {
      tabBarLabel: <Text style={{fontFamily: 'gothamBold'}}>Dashboard</Text>,
      tabBarIcon: ({tintColor}) => (
        <View>
          {tintColor === colors.white ? (
            <Image
              source={require('../res/images/dashboardToolbarIcon_active.png')}
              style={localStyles.toolbarIconView}
            />
          ) : (
            <Image
              source={require('../res/images/dashboardToolbarIcon_off.png')}
              style={localStyles.toolbarIconView}
            />
          )}
        </View>
      ),
      tabBarOptions: {
        activeTintColor: colors.white,
      },
      labeled: true,
      activeColor: colors.white,
      inactiveColor: colors.button_turquoise_blue_color,
      shifting: false,
      barStyle: {backgroundColor: '#009ABD'},
    },
  },

  LeaderBoard: {
    screen: LeaderBoardScreen,
    navigationOptions: {
      tabBarLabel: <Text style={{fontFamily: 'gothamBold'}}>Leaderboard</Text>,
      tabBarIcon: ({tintColor}) => (
        <View>
          {tintColor === colors.white ? (
            <Image
              source={require('../res/images/leaderboardToolbarIcon_active.png')}
              style={localStyles.toolbarIconView}
            />
          ) : (
            <Image
              source={require('../res/images/leaderboardToolbarIcon_off.png')}
              style={localStyles.toolbarIconView}
            />
          )}
        </View>
      ),
      labeled: true,
      activeColor: colors.white,
      inactiveColor: colors.button_turquoise_blue_color,
      shifting: false,
      barStyle: {backgroundColor: '#009ABD'},
    },
  },

  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: <Text style={{fontFamily: 'gothamBold'}}>Profile</Text>,
      tabBarIcon: ({tintColor}) => (
        <View>
          {tintColor === colors.white ? (
            <Image
              source={require('../res/images/profileToolbarIcon_active.png')}
              style={localStyles.profileIconView}
            />
          ) : (
            <Image
              source={require('../res/images/profileToolbarIcon_off.png')}
              style={localStyles.profileIconView}
            />
          )}
        </View>
      ),
      labeled: true,
      activeColor: colors.white,
      inactiveColor: colors.button_turquoise_blue_color,
      shifting: false,
      barStyle: {backgroundColor: '#009ABD'},
    },
  },
});



let CollapseExpand = (index, position) => {
  const inputRange = [index - 1, index, index + 1];
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1],
  });

  const scaleY = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1],
  });

  return {
    opacity,
    transform: [{scaleY}],
  };
};

let SlideFromRight = (index, position, width) => {
  const inputRange = [index - 1, index, index + 1];
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0],
  });
  const slideFromRight = {transform: [{translateX}]};
  return slideFromRight;
};

const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const {layout, position, scene} = sceneProps;
      const width = layout.initWidth;
      const {index, route} = scene;
      const params = route.params || {}; // <- That's new
      const transition = params.transition || 'default'; // <- That's new
      return {
        collapseExpand: CollapseExpand(index, position),
        default: SlideFromRight(index, position, width),
      }[transition];
    },
  };
};

const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      headerMode: 'none',
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: LoginScreen,
      headerMode: 'none',
      navigationOptions: {
        header: null,
      },
    },

    SignUp: {
      screen: SignUpScreen,
      headerMode: 'none',
      navigationOptions: {
        header: null,
      },
    },

    DashBoard: {
      screen: BottomNavigator,
      headerMode: 'none',
      navigationOptions: {
        header: null,
      },
     
    },
   
  },
  {
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
    initialRouteParams: { transition: 'fade' },
    transitionConfig: TransitionConfiguration,
    
  },
);

const AppNavigatorContainer = createAppContainer(AppNavigator);

const localStyles = StyleSheet.create({
  toolbarIconView: {
    width: 25,
    height: 20,
  },
  profileIconView: {
    width: 28,
    height: 23,
  },
});

export default AppNavigatorContainer;
