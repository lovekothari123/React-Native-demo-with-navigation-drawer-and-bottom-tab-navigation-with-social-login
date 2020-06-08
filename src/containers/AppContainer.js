/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import LoadingComponent from '../functionalComponent/LoginComponent';
import AppNavigatorContainer from '../navigation/AppNavigator';
import {connect} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import Internet from '../utils/Internet';
import NavigationService from '../navigation/NavigationService';
import * as appActionCreator from '../redux/app/appActions';
import {bindActionCreators} from 'redux';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInternetWarningShow: false,
    };
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this._handleConnectivityChange,
    );
  }

  _handleConnectivityChange = isConnected => {
    this.props.appActions.isConnectionStateChanged(isConnected);
  };

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this._handleConnectivityChange,
    );
  }

  render() {
    console.log('this.props.loading::::::::::::: ' + this.props.loading);
    return (
      <View style={{flex: 1}}>
        <NavigationContainer>
        <AppNavigatorContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
         </NavigationContainer>
        {this.props.loading ? <LoadingComponent /> : <View />}
        {!this.props.isConnected && this.props.isConnected !== undefined ? (
          <Internet
            onTryAgainClick={this.onTryAgainClick}
            isInternetWarningShow={this.state.isInternetWarningShow}
          />
        ) : (
          <View />
        )}
      </View>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.app.loading,
  isConnected: state.app.isConnected,
});

const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(appActionCreator, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);
