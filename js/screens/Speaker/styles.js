import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  speakerScreenImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  speakerScreenBackground: {
    backgroundColor: '#000000',
    height: '100%',
  },
  speakersBox: {
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#f1f1f1',
    zIndex: 10,
    borderRadius: 20,
    alignItems: 'center',
    padding: 20,
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
  speakerTop: {
    flexDirection: 'row',
    marginTop: 45,
    paddingBottom: 20,
    paddingLeft: 20,
  },
  speakersName: {
    paddingTop: 20,
    fontSize: 25,
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
  aboutSpeakersContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  readMoreButton: {
    backgroundColor: '#9963ea',
    width: 260,
    borderColor: '#f1f1f1',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 20,
  },
  readText: {
    color: '#f1f1f1',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Montserrat-Light',
    fontWeight: '500',
    padding: 10,
  },
});

export default styles;
