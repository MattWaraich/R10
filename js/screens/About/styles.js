import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  aboutTitle: {
    fontSize: 27,
    paddingBottom: 10,
    fontWeight: '600',
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
});

export default styles;
