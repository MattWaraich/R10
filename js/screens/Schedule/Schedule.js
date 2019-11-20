import React from 'react';
import {View, Image, Text, ScrollView, Button} from 'react-native';
import Session from '../../components/Session';

const Schedule = ({navigation, data}) => {
  return data ? (
    <View>
      <Session data={data} />
    </View>
  ) : (
    <Loader />
  );
};

export default Schedule;
