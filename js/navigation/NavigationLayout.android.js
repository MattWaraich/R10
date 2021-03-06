import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import AboutScreen from '../screens/About';
import FavesScreen from '../screens/Faves';
import MapScreen from '../screens/Map';
import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {colors, typography} from '../config/styles';
import {sharedNavigationOptions} from './config';
const {black, mediumGrey, white} = colors;

const AboutStack = createStackNavigator(
  {
    AboutScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'About',
      title: 'About',
      headerLeft: () => (
        <Ionicons
          onPress={() => {
            navigation.toggleDrawer();
          }}
          name="md-menu"
          color="#fff"
          size={36}
          style={{marginLeft: 16}}
        />
      ),
    }),
  },
);

const FavesStack = createStackNavigator(
  {
    FavesScreen,
    SessionScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'Faves',
      title: 'Faves',
      headerLeft: () => (
        <Ionicons
          onPress={() => {
            navigation.toggleDrawer();
          }}
          name="md-menu"
          color="#fff"
          size={36}
          style={{marginLeft: 16}}
        />
      ),
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
      headerLeft: () => (
        <Ionicons
          onPress={() => {
            navigation.toggleDrawer();
          }}
          name="md-menu"
          color="#fff"
          size={36}
          style={{marginLeft: 16}}
        />
      ),
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
      initialRouteName: 'Schedule',
      title: 'Schedule',
      headerLeft: () => (
        <Ionicons
          onPress={() => {
            navigation.toggleDrawer();
          }}
          name="md-menu"
          color="#fff"
          size={36}
          style={{marginLeft: 16}}
        />
      ),
    }),
  },
);

ScheduleStack.navigationOptions = {
  drawerIcon: ({tintColor}) => (
    <Ionicons name="md-calendar" size={25} color={tintColor} />
  ),
};
MapStack.navigationOptions = {
  drawerIcon: ({tintColor}) => (
    <Ionicons name="md-map" size={25} color={tintColor} />
  ),
};
FavesStack.navigationOptions = {
  drawerIcon: ({tintColor}) => (
    <Ionicons name="md-heart" size={25} color={tintColor} />
  ),
};
AboutStack.navigationOptions = {
  drawerIcon: ({tintColor}) => (
    <Ionicons
      name="md-information-circle-outline"
      size={25}
      color={tintColor}
    />
  ),
};

export default createDrawerNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack,
  },
  {
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
