import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  aboutTitle: {
    fontSize: 27,
    paddingBottom: 20,
    fontWeight: '600',
    // fontFamily: typography.fontMain,
  },
  aboutPage: {
    padding: 20,
  },
  aboutPageImage: {
    width: 230,
    height: 55,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  aboutPageImageContainer: {
    alignItems: 'center',
    paddingBottom: 25,
    marginBottom: 25,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },
});

export default styles;
