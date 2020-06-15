import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Button,
  Animated,
  Platform,
  Easing,
} from 'react-native';
import Colors from '../utils/colors';
import FullScreenComponent from '../utils/stylesCommon';
import NavigationService from '../navigation/NavigationService';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';

const DRAWER_WIDTH = 300;

function Feed({navigation}) {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed Screen</Text>
      <Button
        title="Open drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <Button
        title="Toggle drawer"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </View>
  );
}

function Notifications() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </DrawerContentScrollView>
  );
}
const Drawer = createDrawerNavigator();

//Drawer Navigator for the Navigation Drawer / Sidebar
const MyDrawer = (props) => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={Feed} />
      {/* <Drawer.Screen name="Notifications" component={Notifications} /> */}
    </Drawer.Navigator>
  );
};

const AppToolbar = ({title, onPress}) => {
  const [disabled, setDisabled] = useState(false);
  const [toggleFlag, setToggleFlag] = useState(0);
  // var [animatedValue, setAnimatedValue] = useState();
  
  const animatedValue = useRef(new Animated.Value(0)).current;
   
   const Animation_Interpolate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [DRAWER_WIDTH - 46, 10],
  });

  useEffect(() => {
    console.log(
      'This only happens ONCE.  But it happens AFTER the initial render.',
    );
    
  }, []);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
    }).start();
  };

  const toggleDrawer = () => {
    console.log('====Toggle', toggleFlag);

    console.log('====animatedValue', animatedValue);
    if (toggleFlag == 0) {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }).start();
      setToggleFlag(1);
    } else {
      console.log('====animatedValueELSE', animatedValue);
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      }).start();
      setToggleFlag(0);
    }
  };

  return (
    // <View style={[FullScreenComponent.headerContainer]}>
    //   <View style={{flex: 0.2}}>
    //     <TouchableOpacity
    //       onPress={
    //         onPress === undefined ? () => NavigationService.goBack() : onPress
    //       }>
    //       {!title ? (
    //         <Image
    //           source={require('../res/images/backArrow_off.png')}
    //           style={localStyles.backIconContainer}
    //         />
    //       ) : (
    //         <MyDrawer />
    //       )}
    //     </TouchableOpacity>
    //   </View>
    //   <View style={{flex: 0.6}}>
    //     <Image
    //       source={require('../res/images/backArrow_off.png')}
    //       style={localStyles.imageViewContainer}
    //     />

    //   </View>
    //   <View style={{flex: 0.2}} />
    // </View>

    <View style={localStyles.container}>
      <Text style={localStyles.headerText}>
        Animated Sliding Drawer Tutorial.
      </Text>

      <View style={localStyles.buttonRow}>
        <Button title="Fade In" onPress={fadeIn} />
        <Button title="Fade Out" onPress={fadeOut} />
      </View>
      <Animated.View
        style={[
          localStyles.drawer,
          {transform: [{translateX: Animation_Interpolate}]},
        ]}>
        <TouchableOpacity
          // disabled={disabled}
          onPress={() => {
            toggleDrawer();
          }}
          style={{padding: 8}}>
          <Text>MENUIMAGE</Text>
        </TouchableOpacity>
        <View style={localStyles.drawerContainer}>
          <Text style={localStyles.menuLayout}>Buy Now</Text>
          <Text style={localStyles.menuLayout}>Offer Zone</Text>
          <Text style={localStyles.menuLayout}>Qualty Product</Text>
          <Text style={localStyles.menuLayout}>50% Off</Text>
        </View>
      </Animated.View>

      <Animated.View
        style={[
          localStyles.fadingContainer,
          {
            opacity: fadeAnim // Bind opacity to animated value
          },
          
        ]}>
        <Text style={localStyles.fadingText}>Fading View!</Text>
      </Animated.View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  imageViewContainer: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
    left: 4,
  },

  backIconContainer: {
    height: '30%',
    width: '70%',
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  drawer: {
    position: 'absolute',
    top: Platform.OS == 'ios' ? 20 : 0,
    right: 0,
    bottom: 0,
    width: DRAWER_WIDTH,
    flexDirection: 'row',
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: '#f53b3b',
    alignItems: 'center',
  },
  menuLayout: {
    marginBottom: 1,
    backgroundColor: '#4CAF50',
    width: '100%',
    fontSize: 25,
    color: 'white',
    padding: 10,
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 16,
  },
});
export {AppToolbar, MyDrawer};
