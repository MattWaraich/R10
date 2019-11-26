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
  addFaveSession,
  removeFaveSession,
  navigation,
}) => {
  const time = moment(data.startTime).format('hh:mm A');
  const isFave = faveIds.includes(data.id);

  return (
    <ScrollView>
      <View>
        {isFave ? (
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
            style={styles.iconHeart}
            size={24}
            color="red"
          />
        ) : null}
      </View>

      <Text>{data.title}</Text>
      <Text>{data.description}</Text>
      {data.speaker ? (
        <>
          <Text style={styles.presentedBy}>Presented by:</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Speaker', [data.speaker]);
            }}>
            <View style={styles.speakerView}>
              <Image
                style={styles.speakerImg}
                source={{uri: data.speaker.image}}
              />
              <Text style={styles.speakerName}>{data.speaker.name}</Text>
            </View>
          </TouchableOpacity>
        </>
      ) : null}
      <TouchableOpacity
        onPress={() => {
          !isFave ? addFaveSession(data.id) : removeFaveSession(data.id);
        }}>
        <Button>{!isFave ? 'Add to Faves' : 'Remove from Faves'}</Button>
        {Platform.OS === 'android' && <View style={styles.gap} />}
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
