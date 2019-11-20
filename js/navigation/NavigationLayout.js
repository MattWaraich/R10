import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import AboutScreen from '../screens/About';
import FavesScreen from '../screens/Faves';
import MapScreen from '../screens/Map';
import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';
import SpeakerScreen from '../screens/Speaker';
import Icon from 'react-native-vector-icons/Ionicons';

import {colors, typography} from '../config/styles';
import SafeAreaView from 'react-native-safe-area-view';
import {sharedNavigationOptions} from './config';
const {black, mediumGrey, white} = colors;

const AboutStack = createStackNavigator(
  {
    About: AboutScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'About',
      title: 'About',
    }),
  },
);
// Dedicated stacks for Schedule, Map and Faves will go here too!

const FavesStack = createStackNavigator(
  {
    Faves: FavesScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'Faves',
      title: 'Faves',
    }),
  },
);

const MapStack = createStackNavigator(
  {
    Map: MapScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'Map',
      title: 'Map',
    }),
  },
);

const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Session: SessionScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'Session',
      title: 'Schedule',
    }),
  },
);

// moving the order of these stacks effects how they are displayed
export default createBottomTabNavigator(
  {
    Faves: FavesStack,
    About: AboutStack,
    Map: MapStack,
    Schedule: ScheduleStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Schedule') {
          iconName = 'ios-calendar';
        } else if (routeName === 'Map') {
          iconName = 'ios-map';
        } else if (routeName === 'Faves') {
          iconName = 'ios-heart';
        } else if (routeName === 'About') {
          iconName = 'ios-information-circle';
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: white,
      inactiveTintColor: mediumGrey,
      labelStyle: {
        fontSize: 10,
        fontFamily: typography.fontMain,
      },
      tabStyle: {
        backgroundColor: black,
      },
    },
  },
);
