import {StyleSheet, Platform} from 'react-native';
import {colors} from '../../config/styles';

const styles = StyleSheet.create({
  speakerScreenBackground: {
    backgroundColor: '#000',
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  headerWrap: {
    width: '100%',
  },
  goBack: {
    alignSelf: 'flex-start',
    color: '#f1f1f1',
  },
  aboutSpeakerScreen: {
    color: '#f1f1f1',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Montserrat-Light',
    fontWeight: '600',
  },
  ScrollView: {
    position: 'absolute',
    padding: 16,
    height: '86%',
    bottom: 0,
    backgroundColor: '#f1f1f1',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  speakerIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  speakersName: {
    paddingTop: 20,
    fontSize: 35,
    fontWeight: '600',
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
