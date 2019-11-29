import React from 'react';
import moment from 'moment';
import {
  Platform,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
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
  const isFaved = faveIds.includes(data.id);

  return (
    <ScrollView style={styles.scheduleContainer}>
      <View style={styles.heartIcon}>
        <Text style={styles.speakerLocation}>{data.location}</Text>

        {isFaved && (
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
            style={styles.iconHeart}
            size={24}
            color="red"
          />
        )}
      </View>
      <Text style={styles.speakerTitle}>{data.title}</Text>
      <Text style={styles.speakerTime}>{time}</Text>
      <Text style={styles.speakerDescription}>{data.description}</Text>
      {data.speaker && (
        <Text style={styles.speakerHostedBy}>Presented by:</Text>
      )}
      {data.speaker && (
        <TouchableOpacity
          style={styles.speakerWrap}
          onPress={() => {
            navigation.push('Speaker', [data.speaker]);
          }}>
          <Image
            style={styles.speakerImageIcon}
            source={{uri: data.speaker.image}}
          />
          <Text style={styles.speakerName}>{data.speaker.name}</Text>
        </TouchableOpacity>
      )}

      <View style={styles.speakerGreyBar} />

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
