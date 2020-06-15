import React, {useState, useEffect, Fragment} from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  StatusBar,
  BackHandler,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Image,
} from 'react-native';
import UtilStyles from '../utils/stylesCommon';
import NavigationService from '../navigation/NavigationService';
import {CustomText, CustomTextNormalFont} from '../components/CustomText';
import {ImageFullScreen} from '../components/ImageFullScreen';
import {
  LoginScreenBKImg,
  Apple_logo,
  Gmail_logo,
  Fb_logo,
  Close_Icon,
} from '../utils/ImagesPath';
import StringUtils from '../utils/strings';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {LoginButton, Button} from '../components/Button';
import Colors from '../utils/colors';

// import { createStackNavigator } from 'react-navigation';
const {height} = Dimensions.get('window');
const LoginComponent = props => {
  var isHidden = true;
  var bounceValue = new Animated.Value(height * 1);
  const [BottomSlider, setBottomSlider] = useState(false);

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

  const _toggleSubview = () => {
    console.log('Bottom ===>', isHidden);
    setBottomSlider(isHidden ? false : true);
    var toValue = 100;

    if (isHidden) {
      toValue = 0;
    }

    //This will animate the transalteY of the subview between 0 & 100 depending on its current state
    //100 comes from the style below, which is the height of the subview.
    Animated.spring(bounceValue, {
      toValue: toValue,
      velocity: 0,
      tension: 2,
      friction: 2,
    }).start();
    isHidden = !isHidden;
  };

  return (
    <Fragment>
      <SafeAreaView style={UtilStyles.SafeAreaContainer}>
        <StatusBar hidden />

        <ImageFullScreen>{LoginScreenBKImg}</ImageFullScreen>
        {/* // ==================== Terms And Conditions ==================== //  */}

        <Animated.View
          style={[
            localStyles.subView,
            {transform: [{translateY: bounceValue}]},
          ]}>
          <SafeAreaView style={UtilStyles.SafeAreaContainer}>
            <View style={localStyles.termsAndConditionHeading}>
              <View style={localStyles.termsCenterText}> 
              <CustomTextNormalFont>
                {StringUtils.TermsAndConditionCaps}
              </CustomTextNormalFont>
              </View>
              <View style={localStyles.endFillImage}>
              <TouchableOpacity onPress={() => _toggleSubview()}>
                <Image
                  style={localStyles.close_icon_style}
                  source={Close_Icon}
                />
              </TouchableOpacity>
            </View>

            </View>
            
            <View style={localStyles.termsAndConditionText}>
              <ScrollView>
               <CustomTextNormalFont style={localStyles.termstext}>{StringUtils.TermsAndConditionText}</CustomTextNormalFont>
              </ScrollView>
            </View>
          </SafeAreaView>
        </Animated.View>
        {/* // ==================== Terms And Conditions ==================== //  */}
        <View style={UtilStyles.overlay}>
          <View>
            <CustomText style={UtilStyles.AppNameOnTop}>
              {StringUtils.Phalanx}
            </CustomText>

            <View style={localStyles.loginTag}>
              <View style={localStyles.loginHeading}>
                <CustomTextNormalFont style={localStyles.centerText}>
                  {StringUtils.Get_tag}
                </CustomTextNormalFont>
                <CustomTextNormalFont style={localStyles.centerText}>
                  {StringUtils.Start_tag}
                </CustomTextNormalFont>
              </View>
              <View style={localStyles.loginButtons}>
                <LoginButton source={Gmail_logo}>
                  {StringUtils.ConnectWithGoogle}
                </LoginButton>
                <LoginButton source={Fb_logo}>
                  {StringUtils.ConnectWithFacebook}
                </LoginButton>
                <LoginButton
                  source={Apple_logo}
                  onPress={() => {
                     NavigationService.replace('DashBoard', null);
                  }}>
                  {StringUtils.ConnectWithApple}
                </LoginButton>
              </View>
              <CustomTextNormalFont
                style={[localStyles.marginTopposition, localStyles.centerText]}>
                {StringUtils.Connect_with_email}
              </CustomTextNormalFont>
              <View style={localStyles.termAndCondition}>
                <TouchableOpacity
                  onPress={() => {
                    _toggleSubview();
                    
                  }}
                  style={[
                    localStyles.terms_and_condition_tag,
                    localStyles.centerText,
                  ]}>
                  <CustomTextNormalFont
                    style={[
                      localStyles.terms_and_condition_tag,
                      localStyles.centerText,
                    ]}>
                    {StringUtils.TermsAndCondition}
                  </CustomTextNormalFont>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    _toggleSubview();
                  }}
                  style={[
                    localStyles.terms_and_condition_tag,
                    localStyles.centerText,
                  ]}>
                  <CustomTextNormalFont
                    style={[
                      localStyles.terms_and_condition_tag,
                      localStyles.centerText,
                      localStyles.Underline,
                    ]}>
                    {StringUtils.TermsAndCondition1}
                  </CustomTextNormalFont>
                </TouchableOpacity>
              </View>

              {/* //=============================================End MAIN TAG ==============================================//      */}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const localStyles = StyleSheet.create({
  loginTag: {
    alignItems: 'center',
    textAlign: 'center',
    height: hp('100%'),
    width: wp('100%'),
  },
  loginHeading: {
    marginTop: height * 0.2, // 20 % down of screen height
    marginLeft: 10,
    marginRight: 10,
  },
  centerText: {
    textAlign: 'center',
  },
  marginTopposition: {
    marginTop: height * 0.02,
    fontSize: 18,
  },
  loginButtons: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.05,
  },
  termAndCondition: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: height * 0.2,
  },
  terms_and_condition_tag: {
    fontSize: 14,
  },
  Underline: {
    textDecorationLine: 'underline',
  },
  subView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // backgroundColor: 'red',
    height: height * 1,
    zIndex: 1,
  },
  termsAndConditionHeading: {
    width: wp('100%'),
    height: height * 0.1,
    backgroundColor: Colors.status_bar,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  termsAndConditionText: {
    width: wp('100%'),
    height: height * 1,
    backgroundColor: Colors.termsAndConditionBK,
  },
  termstext: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
  },
  close_icon_style: {
    width: 15,
    height: 15,
    resizeMode: 'cover',
  },
  endFillImage: {
    flex: 0.1,
    marginRight: 0,
  },
  termsCenterText: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default LoginComponent;
