import React from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import Color from '../utils/colors';

const StatusBarComponentView = props => {
    return (
            <StatusBar
                translucent={false}
                networkActivityIndicatorVisible={true}
                hidden={false}
                backgroundColor={Color.status_bar}
                barStyle="dark-content">
                    
            </StatusBar>
    );
}



export default StatusBarComponentView;