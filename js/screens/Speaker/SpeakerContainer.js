import React, {Component} from 'react';
import {FavesContext} from '../../context/FavesContext/FavesContext';

import Speaker from './Speaker';

class SpeakerContainer extends Component {
  static navigationOptions = {
    title: 'Speaker',
  };

  render() {
    const {navigation} = this.props;

    return <Speaker data={navigation.state.params[0]} />;
  }
}

export default SpeakerContainer;
