import React from 'react';
import {SectionList, Text} from 'react-native';
import moment from 'moment';
import Session from '../../components/Session';
import styles from './styles';

const Faves = ({navigation, data}) => {
  return (
    <SectionList
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <Session navigation={navigation} session={item} />
      )}
      renderSectionHeader={({section: {title}}) => {
        const time = moment(title).format('hh:mm A');
        return <Text style={styles.time}>{`${time}`}</Text>;
      }}
    />
  );
};

export default Faves;
