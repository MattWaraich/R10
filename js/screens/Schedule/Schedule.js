import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  Button,
  ActivityIndicator,
} from 'react-native';

const Schedule = ({navigation, allSession}) => {
  return allSession ? <View /> : <ActivityIndicator />;
};

export default Schedule;
