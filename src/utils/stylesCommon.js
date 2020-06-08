/* eslint-disable no-undef */
import {StyleSheet, Platform} from 'react-native';
import Colors from '../utils/colors';
import {Assets} from 'react-navigation-stack';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  fullScreenCenterAllignl: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  SafeAreaContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'Android' ? StatusBar.currentHeight : 0,
    backgroundColor: Colors.status_bar,
  },

  SafeAreaBottomContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'Android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#003943',
  },

  commonModalViewSeparator: {
    width: '100%',
    backgroundColor: Colors.white,
    height: 0.5,
  },

  commonMessagingModalTouchBtnYes: {
    height: 95,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'gothamBook',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: Colors.gradient_start_color,
  },

  commonModalCameraOption: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'gothamBook',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    color: Colors.white,
    backgroundColor: Colors.gradient_start_color,
  },

  commonModalTouchBtnYes: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'gothamBook',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: Colors.gradient_start_color,
  },

  fullCommonModalCameraOption: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'gothamBook',
    backgroundColor: Colors.gradient_start_color,
  },

  commonModalContentDown: {
    height: 55,
    width: '100%',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    marginTop: 10,
    fontFamily: 'gothamBold',
  },

  commonModalContainer: {
    backgroundColor: 'transparent',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'gothamBook',
  },

  simpleToolbarHeader: {
    height: 60,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  commonModalContentUp: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 10,
    fontFamily: 'gothamBook',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    marginTop: 10,
  },

  commonModalMessage: {
    color: Colors.black,
    fontFamily: 'gothamBold',
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 20,
  },

  commonModalBtnYes: {
    color: Colors.black,
    fontFamily: 'gothamBold',
    fontSize: 18,
    lineHeight: 20,
  },

  textTitleColorAndSizeContainer: {
    color: Colors.morning_glory_color,
    fontSize: 22,
    fontFamily: 'gothamBold',
  },
  textTitleWhiteBold: {
    color: Colors.white,
    fontSize: 28,
    fontFamily: 'gothamBold',
    marginTop: 10,
  },

  bottomModal: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  dashBoardTitleColorAndSizeContainer: {
    color: Colors.darkGrey,
    fontSize: 30,
  },

  headerContainer: {
    height: 130,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTextStyle: {
    alignSelf: 'center',
    color: Colors.white,
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center',
  },
  textSubTitleColorAndSizeContainer: {
    color: Colors.morning_glory_color,
    fontSize: 22,
    fontFamily: 'gothamBook',
    marginTop: 10,
  },

  textErrorMsgColorAndSizeContainer: {
    fontSize: 14,
    fontFamily: 'gothamBook',
    color: Colors.white,
    lineHeight: 15,
  },

  textSubTitleSmallSizeColorAndSizeContainer: {
    fontSize: 10,
    fontFamily: 'gothamBook',
    color: Colors.lightGray,
  },

  inputViewContainer: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
  },
  viewTextInputContainer: {
    borderWidth: 4,
    borderRadius: 6,
    
    borderColor: Colors.inputBorder,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  redBorderColor: {
    borderColor: Colors.error_background_color,
  },
  grayBorderColor: {
    borderColor: Colors.inputBorder,
  },
  textInput: {
    width: '100%',
    height: 45,
    alignItems: 'center',
    color: Colors.black,
    paddingLeft: 7,
    fontSize: 14,
    fontFamily: 'gothamBook',
  },
  textColorRed: {
    color: Colors.error_background_color,
  },
  textColorBlack: {
    color: Colors.black,
  },
  viewContainer: {
    width: '80%',
    height: 50,
    marginBottom: 30,
  },

  buttonIconView: {
    height: 50,
    textAlignVertical: 'center',
    width: '100%',
    borderRadius: 23,
    backgroundColor: Colors.button_turquoise_blue_color,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonView: {
    height: 50,
    textAlignVertical: 'center',
    width: '100%',
    borderRadius: 23,
    backgroundColor: Colors.button_turquoise_blue_color,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  buttonColorChangedView: {
    height: 50,
    textAlignVertical: 'center',
    width: '100%',
    borderRadius: 23,
    backgroundColor: Colors.on_button_press_color,
    justifyContent: 'center',
    alignItems: 'center',
  },

  shadowView: {
    shadowColor: Colors.shadow_color,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 5,
  },
  pageTitleTextStyle: {
    color: Colors.morning_glory_color,
    fontSize: 25,
    fontFamily: 'gothamBold',
    marginTop: 15,
  },
  pageSubTitleTextStyle: {
    color: Colors.white,
    fontSize: 20,
    fontFamily: 'gothamBook',
    marginTop: 10,
  },
  globalViewcontainer: {
    flex: 1,
    marginStart: 30,
    marginEnd: 30,
    marginBottom: 10,
  },
  globalInputViewContainer: {
    marginTop: 15,
  },
  transparentTextInput: {
    width: '100%',
    height: 45,
    alignItems: 'center',
    color: Colors.morning_glory_color,
    paddingLeft: 7,
    fontSize: 14,
    backgroundColor: 'transparent',
    fontFamily: 'gothamBook',
  },
  TransparentInputViewContainer: {
    borderWidth: 4,
    borderRadius: 6,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: Colors.morning_glory_color,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  passwordTextStyle: {
    color: Colors.white,
    fontSize: 13,
    lineHeight: 20,
    fontFamily: 'gothamBook',
  },
  termsBoldTextStyle: {
    color: Colors.morning_glory_color,
    fontSize: 14,
    fontFamily: 'gothamBold',
  },
  errorContainer: {
    width: '100%',
    backgroundColor: Colors.error_background_color,
    paddingLeft: 35,
    paddingEnd: 35,
    paddingTop: 15,
    paddingBottom: 15,
  },
  errorTopMargin: {marginTop: 15},

  linearGradient: {
    flex: 1,
  },
  errorPosition: {
    position: 'absolute',
    marginTop: 15,
  },
  errorTitle: {
    color: Colors.white,
    fontSize: 22,
    fontFamily: 'gothamBold',
    marginTop: 15,
    marginBottom: 20,
  },
  simpleToolbarHeader: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameSponsorText: {
    color: Colors.HeaderTitle,
    fontSize: 17,
    marginTop: 20,
    fontFamily: 'gothamBook',
    alignSelf: 'center',
  },
  sopnsorDesText: {
    color: Colors.black,
    fontSize: 15,
    lineHeight: 20,
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
    // alignSelf: 'center',
    fontFamily: 'gothamBook',
    // alignSelf:"center",
    // textAlign:"justify"
  },
  readMoreTextStyle: {
    color: Colors.readMoreColor,
    fontFamily: 'gothamBold',
    fontSize: 19,
    alignSelf: 'center',
    marginTop: 20,
  },
});
