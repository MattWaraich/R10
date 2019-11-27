import {StyleSheet, Platform} from 'react-native';
import {blue} from 'ansi-colors';

const styles = StyleSheet.create({
  speakerScreenBackground: {
    backgroundColor: '#000000',
    height: '100%',
  },
  goBack: {
    color: '#f1f1f1',
  },
  aboutSpeakerScreen: {
    color: '#f1f1f1',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Montserrat-Light',
    fontWeight: '600',
  },
  speakersName: {
    paddingTop: 20,
    fontSize: 35,
    color: blue,
    fontFamily: 'Montserrat-Light',
    paddingBottom: 20,

    ...Platform.select({
      android: {
        color: '#4d4b46',
      },
    }),
  },
  speakersBio: {
    fontSize: 17,
    fontFamily: 'Montserrat-Light',
    lineHeight: 30,
    fontWeight: '300',
    ...Platform.select({
      android: {
        color: '#999999',
      },
    }),
  },
});

export default styles;
