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
});

export default styles;
