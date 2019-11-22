import React, {Component} from 'react';
import Faves from './Faves';
import {FavesContext} from '../../context/FavesContext/FavesContext';

class FavesContainer extends Component {
  render() {
    return (
      <FavesContext.Consumer>
        {}
      </FavesContext.Consumer>
    );
  }
}

export default FavesContainer;
