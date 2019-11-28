import React from 'react';
import moment from 'moment';
import {
  Platform,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

const Session = ({
  data,
  faveIds,
  addFaveSessionId,
  removeFaveSessionId,
  navigation,
}) => {
  const time = moment(data.startTime).format('hh:mm A');
  console.log(data);
  const isFaved = faveIds.includes(data.id);

  return (
    <ScrollView>
      {isFaved && (
        <Ionicons
          name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
          style={styles.iconHeart}
          size={24}
          color="red"
        />
      )}

      <Text>{data.location}</Text>
      <Text>{data.title}</Text>
      <Text>{time}</Text>
      <Text>{data.description}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.push('Speaker', [data.speaker]);
        }}>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: data.speaker.image}}
        />
        <Text>{data.speaker.name}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          !isFaved ? addFaveSessionId(data.id) : removeFaveSessionId(data.id);
        }}>
        <Text>{!isFaved ? 'Add to Faves' : 'Remove from Faves'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Session;

Session.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string,
    location: PropTypes.string,
    speaker: PropTypes.object,
    startTime: PropTypes.string,
    title: PropTypes.string,
  }),
  faveIds: PropTypes.arrayOf(PropTypes.string),
  addFaveSession: PropTypes.func,
  removeFaveSession: PropTypes.func,
};
