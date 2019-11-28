import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  aboutTitle: {
    fontSize: 25,
    paddingBottom: 10,
    fontWeight: '600',
    paddingLeft: 10,
  },
  aboutPage: {
    paddingLeft: 60,
    paddingRight: 60,
  },
  aboutPageImage: {
    width: 250,
    height: 60,
  },
  loader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  aboutPageImageContainer: {
    alignItems: 'center',
    paddingBottom: 23,
    paddingTop: 23,
    marginBottom: 23,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 2,
  },
  text: {
    fontFamily: 'Montserrat-Light',
    fontWeight: '300',
    paddingBottom: 20,
    fontSize: 16,
    paddingLeft: 10,
  },
  allConducts: {
    paddingBottom: 20,
    paddingLeft: 10,
    fontWeight: '100',
  },

  aboutFooter: {
    paddingLeft: 10,
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 40,
  },
  aboutGreyBar: {
    height: 1,
    backgroundColor: '#e6e6e6',
  },
});

export default styles;
