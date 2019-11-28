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
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../config/styles';

const {purple, blue} = colors;

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
    <ScrollView style={styles.wrap}>
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
      {data.speaker && <Text>Presented by:</Text>}
      {data.speaker && (
        <TouchableOpacity
          style={styles.speakerWrap}
          onPress={() => {
            navigation.push('Speaker', [data.speaker]);
          }}>
          <Image
            style={{width: 50, height: 50}}
            source={{uri: data.speaker.image}}
          />
          <Text>{data.speaker.name}</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={styles.buttonWrap}
        onPress={() => {
          !isFaved ? addFaveSessionId(data.id) : removeFaveSessionId(data.id);
        }}>
        <LinearGradient
          style={styles.speakerFaveButton}
          colors={[blue, purple]}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 0.0}}
        />
        <Text style={styles.buttonText}>
          {!isFaved ? 'Add to Faves' : 'Remove from Faves'}
        </Text>
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
