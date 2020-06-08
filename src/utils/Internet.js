import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import strings from '../utils/strings';
import colors from '../utils/colors';
// import { Colors } from 'react-native-paper';

const onTryAgainClick = () => {
  console.log('TRY again');
};

const Internet = props => (
  <SafeAreaView style={styles.safeAreaViewCantainer}>
    <View style={styles.internetContainer}>
      <StatusBar backgroundColor={colors.red} barStyle="dark-content" />
      {props.isInternetWarningShow ? (
        <View style={styles.internetViewWarning}>
          <Text style={styles.internetTvWarning}>
            Please turn ON your data or wifi
          </Text>
        </View>
      ) : (
        <View />
      )}

      <View style={styles.internetViewTvImg}>
        {/* <Image style={styles.internetWarningImageView} source={require('../res/images/no_content.png')} /> */}
        <Text style={styles.inenernetTvMsg}>
          {strings.no_internet_connection}
        </Text>
        <Text style={styles.internetTvMsgIn}>
          {strings.please_check_your_internet}
        </Text>
        <TouchableOpacity
          style={styles.inernetBtnRequest}
          onPress={() => onTryAgainClick()}>
          <Text style={styles.internetTxtRequest}>{strings.try_again}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  internetContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  internetViewWarning: {
    width: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  internetTvWarning: {
    color: colors.white,
    fontSize: 14,
    padding: 5,
    paddingTop: 3,
    paddingBottom: 3,
  },
  internetWarningImageView: {
    width: 180,
    height: 130,
    marginBottom: 20,
  },
  inenernetTvMsg: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  internetTvMsgInfo: {
    color: colors.white,
    fontSize: 12,
    marginTop: 7,
    textAlign: 'center',
    marginRight: 40,
    marginLeft: 40,
  },
  inernetBtnRequest: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    backgroundColor: colors.white,
    color: colors.white,
    marginTop: 100,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 4,
  },
  internetViewTvImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  internetTxtRequest: {
    color: colors.black,
    fontSize: 14,
    textAlign: 'center',
  },
  safeAreaViewCantainer: {
    flex: 1,
    backgroundColor: colors.red,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});

export default Internet;
