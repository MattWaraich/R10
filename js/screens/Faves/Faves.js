import React from 'react';
import {SectionList, Text} from 'react-native';
import moment from 'moment';
import SessionComp from '../../components/SessionComp';
import styles from './styles';

const Faves = ({navigation, data}) => {
  return (
    <SectionList
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <SessionComp navigation={navigation} session={item} />
      )}
      renderSectionHeader={({section: {title}}) => {
        const time = moment(title).format('hh:mm A');
        return <Text style={styles.time}>{`${time}`}</Text>;
      }}
    />
  );
};

export default Faves;
