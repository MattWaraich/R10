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
<<<<<<< HEAD
      <View>
=======
      <View style={styles.speakerTop}>
>>>>>>> aa57c94c73d50974c345343d35d1a00130ad810d
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
<<<<<<< HEAD
        <View>
          {/* add correct image path!! */}
          <Image />
=======
        <View style={styles.speakerBox}>
          <Image style={styles.speakersImage} source={{uri: speaker.image}} />
>>>>>>> aa57c94c73d50974c345343d35d1a00130ad810d
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
