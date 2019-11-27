import React from 'react';
import {Text, View, TouchableOpacity, Image, Linking} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

const Speaker = ({navigation, speaker}) => {
  let IconComponent = Ionicons;
  return (
    <View style={styles.speakerScreenBackground}>
      <View>
        <TouchableOpacity>
          <IconComponent
            name="ios-close"
            size={50}
            style={styles.goBack}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <View style={styles.aboutSpeakersContainer}>
          <Text style={styles.aboutSpeakersScreen}>About the Speaker</Text>
        </View>
      </View>
      <ScrollView>
        <View>
          {/* add correct image path!! */}
          <Image />
          <Text style={styles.speakersName}>{speaker.name}</Text>
          <Text style={styles.speakersBio}>{speaker.bio}</Text>
          <TouchableOpacity onPress={() => Linking.openURL(speaker.url)}>
            <Text style={styles.readMoreText}>Read More on Wikipedia</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

Speaker.propTypes = {
  speaker: PropTypes.object.isRequired,
};

export default withNavigation(Speaker);
