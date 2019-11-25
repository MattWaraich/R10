import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';

const Map = () => {
  return (
    <View style={styles.mapPageImageContainer}>
      <Image source={require('../../assets/images/comingSoon.png')} />
    </View>
  );
};

export default Map;
