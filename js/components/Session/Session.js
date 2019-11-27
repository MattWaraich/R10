import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Session = ({session, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push('Session', [session]);
      }}>
      <View style={styles.sessionContainer}>
        <Text style={styles.title}>{session.title}</Text>
        <Text style={styles.location}>{session.location}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Session;
