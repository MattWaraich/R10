import {StyleSheet} from 'react-native';
import {colors, typography} from '../../config/styles';

const styles = StyleSheet.create({
  scheduleContainer: {paddingHorizontal: 12},
  speakerWrap: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

  buttonWrap: {
    width: 180,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  heartIcon: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  speakerLocation: {
    color: '#999999',
    fontWeight: '700',
  },

  speakerFaveButton: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  buttonText: {
    fontFamily: typography.fontMain,
    fontSize: 16,
    color: colors.white,
  },

  speakerTitle: {
    fontWeight: '600',
    paddingTop: 5,
    fontSize: 23,
    paddingBottom: 15,
    paddingLeft: 10,
  },
  speakerTime: {
    color: '#cf392a',
    fontWeight: '500',
    paddingBottom: 15,
    paddingLeft: 10,
  },
  speakerDescription: {
    fontFamily: 'Montserrat-Light',
    fontSize: 18,
    paddingBottom: 15,
    paddingLeft: 10,
  },
  speakerHostedBy: {
    color: '#999999',
    fontSize: 15,
    fontWeight: '600',
    paddingBottom: 10,
    paddingLeft: 10,
  },
  speakerImageIcon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    paddingRight: 20,
  },
  speakerName: {
    paddingLeft: 15,
    paddingTop: 15,
    fontWeight: '500',
    fontSize: 16,
    paddingBottom: 35,
  },
  speakerGreyBar: {
    height: 1,
    backgroundColor: '#e6e6e6',
  },
});

export default styles;
