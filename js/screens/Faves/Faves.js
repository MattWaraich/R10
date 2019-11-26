import React from 'react';
import {Text} from 'react-native';
import dataFormatHelper from '../../lib/dataFormatHelper';

const Favs = ({navigation, data}) => {
  console.log(data);
  const formattedData = dataFormatHelper(data);
  console.log(formattedData);
  return <Text>asdfdf</Text>;
};

export default Favs;
