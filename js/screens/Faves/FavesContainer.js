import React, {Component} from 'react';
import Faves from './Faves';
import {FavesContext} from '../../context/FavesContext/FavesContext';
import {Session} from '../Session';

class FavesContainer extends Component {
  render() {
    return (
      <FavesContext.Consumer>
        <Faves navigation={this.props.navigation} Session={Session} />
      </FavesContext.Consumer>
    );
  }
}

export default FavesContainer;
