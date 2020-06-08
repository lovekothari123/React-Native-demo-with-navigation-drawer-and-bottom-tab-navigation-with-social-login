import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import Colors from '../utils/colors';
import FullScreenComponent from '../utils/stylesCommon';
import NavigationService from '../navigation/NavigationService';



const GameHeader = ({ title, onPress,productLogo,corporateLogo }) => {


    return (
        <View
            style={[
                FullScreenComponent.headerContainer,

            ]}>
            <View style={{ flex: 0.1 }}>
                <TouchableOpacity
                    onPress={onPress === undefined ? () => NavigationService.goBack() : onPress}>
                    {!title ? <Image
                        source={require('../res/images/backArrow_off.png')}
                        style={localStyles.backIconContainer}></Image> : null}

                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.8 }}>
           
              {productLogo != null && productLogo != '' && productLogo != undefined && corporateLogo != null && corporateLogo != '' && corporateLogo != undefined ?
                <View
                    style={localStyles.imageViewContainer}>
                    <View style={{ flex: 0.45 }}>
                    <Image source={{uri:productLogo}}
                        style={localStyles.imageDecoratorView}
                        resizeMode="contain"
                        >
                        </Image>
                    </View>
                    <View style={{ flex: 0.10 }}>
                        <Text style={localStyles.seperatorView}></Text>
                    </View>
                    <View style={{ flex: 0.45,marginRight:10 }}>
                        <Image source={{uri:corporateLogo}}
                        style={localStyles.imageDecoratorView}
                        resizeMode="contain"
                        >
                        </Image>
                    </View>


                </View>
              :
              <View
              style={localStyles.imageViewContainer}>

              {/* <View style={{ flex: 0.45 }}>
              <Image source={{uri:productLogo}}
                  style={localStyles.imageDecoratorView}
                  resizeMode="contain"
                  >
                  </Image>
              </View> */}
              <View style={{ flex: 1 }}>
                  {/* <Text style={localStyles.seperatorView}></Text> */}
                  <Image source={{uri:corporateLogo || productLogo}}
                  style={localStyles.imageDecoratorView}
                  resizeMode="contain"
                  >
                  </Image>
              </View>
              {/* <View style={{ flex: 0.45,marginRight:10 }}>
                  <Image source={{uri:corporateLogo}}
                  style={localStyles.imageDecoratorView}
                  resizeMode="contain"
                  >
                  </Image>
              </View> */}


          </View>
            }
               
            </View>
            <View style={{ flex: 0.1 }}></View>
        </View>
    )
}

const localStyles = StyleSheet.create({
    imageViewContainer: {
        width: '100%',
        justifyContent:'center',
        height: 70,
        left: 4,
        backgroundColor: Colors.white,
        borderRadius: 5,
        flexDirection: 'row'
    },

    backIconContainer: {
        height: '35%',
        width: '100%',
        height: 25,
        marginBottom: 55,
        marginTop: 20,
        resizeMode: 'contain',
    },

    headerTitleTextStyle: {
        alignSelf: 'center',
        color: Colors.black,
        fontSize: 24,
        lineHeight: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    seperatorView: {
        height: '80%',
        backgroundColor: Colors.seperatorColor,
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 8,
        width:1


    },

    imageDecoratorView:{
        height:65,
        marginTop:5,
        justifyContent:'center',
        width:'100%'
    },
})
export { GameHeader };

