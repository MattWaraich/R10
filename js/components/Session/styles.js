import {StyleSheet} from 'react-native';
import {colors, typography} from '../../config/styles';
const {black, lightGrey, mediumGrey} = colors;

const styles = StyleSheet.create({
  title: {
    color: black,
    fontSize: typography.baseSize * 1.25,
  },
  location: {
    color: mediumGrey,
  },
  sessionContainer: {
    borderWidth: 1,
    padding: typography.baseSize / 2,
    borderColor: lightGrey,
  },
});

export default styles;
