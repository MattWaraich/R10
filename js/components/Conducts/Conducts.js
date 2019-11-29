import React from 'react';
import {
  Platform,
  UIManager,
  Text,
  View,
  LayoutAnimation,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

class Conducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true,
      spinValue: new Animated.Value(0),
    };
    this.icons = {
      collapse: '+',
      show: '-',
    };
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  animate = () => {
    Animated.timing(this.state.spinValue, {
      toValue: 1,
      easing: Easing.linear,
    }).start(animation => {
      if (animation.finished) {
        this.setState({spin: new Animated.Value(0)});
      }
    });

    if (!this.state.collapse) {
      this.setState({
        collapse: true,
      });
    } else {
      this.setState({
        collapse: false,
      });
    }
  };

  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    let icon = this.icons['show'];

    if (this.state.collapse) {
      icon = this.icons['collapse'];
    }

    return (
      <View style={{overflow: 'hidden'}}>
        <TouchableOpacity
          onPress={() => {
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut,
            );
            this.setState({collapse: !this.state.collapse});
          }}>
          <View style={{flexDirection: 'row'}}>
            <Animated.Text
              style={{
                color: '#9963ea',
                fontSize: 20,
                fontFamily: 'Montserrat',
                transform: [{rotate: spin}],
              }}>
              {icon}
            </Animated.Text>
            <Text
              style={{
                paddingLeft: 16,
                color: '#9963ea',
                fontSize: 16,
                fontFamily: 'Montserrat',
              }}>
              {this.props.title}
            </Text>
          </View>
        </TouchableOpacity>
        {!this.state.collapse && (
          <Text style={styles.conductDescription}>
            {this.props.description}
          </Text>
        )}
      </View>
    );
  }
}

Conducts.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Conducts;
