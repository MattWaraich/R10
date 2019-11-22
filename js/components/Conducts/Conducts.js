import React from 'react';
import {
  Platform,
  UIManager,
  Text,
  View,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

class Conducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true,
    };
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <View style={{overflow: 'hidden'}}>
        <TouchableOpacity
          onPress={() => {
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut,
            );
            this.setState({expanded: !this.state.expanded});
          }}>
          <Text
            style={{color: '#9963ea', fontSize: 20, fontFamily: 'Montserrat'}}>
            {this.props.title}
          </Text>
        </TouchableOpacity>
        {this.state.expanded && <Text>{this.props.description}</Text>}
      </View>
    );
  }
}

Conducts.propTypes = {
  conducts: PropTypes.object.isRequired,
};

export default Conducts;
