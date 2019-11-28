import React, {Component} from 'react';
import {FavesContext} from '../../context/FavesContext/FavesContext';
import {Text} from 'react-native';

class SpeakerContainer extends Component {
  static navigationOptions = {
    title: 'Speaker',
  };

  render() {
    const {navigation} = this.props;
    const {params} = navigation.state;
    console.log(params);
    return <Text>abc</Text>;
  }
}

export default SpeakerContainer;
