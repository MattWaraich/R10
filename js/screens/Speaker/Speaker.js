import React from 'react';
import {Text, View, TouchableOpacity, Image, Linking} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import SafeAreaView from 'react-native-safe-area-view';

const Speaker = ({navigation, data}) => {
  let IconComponent = Ionicons;
  return (
    <SafeAreaView style={styles.speakerScreenBackground}>
      <View style={styles.headerWrap}>
        <TouchableOpacity>
          <IconComponent
            name="ios-close"
            size={50}
            style={styles.goBack}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <View style={styles.aboutSpeakersContainer}>
          <Text style={styles.aboutSpeakerScreen}>About the Speaker</Text>
        </View>
      </View>
      <ScrollView style={styles.ScrollView}>
        <View>
          {/* add correct image path!! */}
          <Image style={styles.speakerIcon} source={{uri: data.image}} />

          <Text style={styles.speakersName}>{data.name}</Text>
          <Text style={styles.speakersBio}>{data.bio}</Text>
          <TouchableOpacity onPress={() => Linking.openURL(data.url)}>
            <Text style={styles.readMoreText}>Read More on Wikipedia</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

Speaker.propTypes = {
  speaker: PropTypes.object.isRequired,
};

export default withNavigation(Speaker);
