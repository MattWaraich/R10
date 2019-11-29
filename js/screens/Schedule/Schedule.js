import React from 'react';
import {Text, SectionList} from 'react-native';
import Loader from '../../components/Loader';
import SessionComp from '../../components/SessionComp';
import moment from 'moment';
import styles from './styles';
import PropTypes from 'prop-types';

const Schedule = ({navigation, data}) => {
  return data ? (
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
  ) : (
    <Loader />
  );
};

export default Schedule;

Schedule.propTypes = {
  data: PropTypes.array,
};
