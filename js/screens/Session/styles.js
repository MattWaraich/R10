import {StyleSheet} from 'react-native';
import {colors, typography} from '../../config/styles';

const styles = StyleSheet.create({
  wrap: {padding: 16},
  speakerWrap: {
    flexDirection: 'row',
  },
  buttonWrap: {
    width: 180,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartIcon: {
    alignSelf: 'flex-end',
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
  speakerLocation: {
    color: '#999999',
    fontWeight: '700',
  },
  speakerTitle: {
    fontWeight: '600',
    paddingTop: 20,
    fontSize: 23,
    paddingBottom: 15,
  },
  speakerTime: {
    color: '#cf392a',
    fontWeight: '500',
    paddingBottom: 15,
  },
  speakerDescription: {
    fontFamily: 'Montserrat-Light',
    fontSize: 18,
    paddingBottom: 15,
  },
  speakerHostedBy: {
    color: '#999999',
    fontSize: 15,
    fontWeight: '600',
    paddingBottom: 10,
  },
  speakerImageIcon: {
    width: 50,
    height: 50,
    borderRadius: 50,
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
