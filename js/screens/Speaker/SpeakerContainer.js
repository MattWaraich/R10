import React, {Component} from 'react';
import Session from '../Session';
import {FavesContext} from '../../context/FavesContext/FavesContext';
class SessionContainer extends Component {
  static navigationOptions = {
    title: 'Session',
  };

  render() {
    const {navigation} = this.props;
    const {params} = navigation.state;
    return (
      <FavesContext.Consumer>
        {({favIds, addFavSession, removeFavSession}) => (
          <Session
            navigation={navigation}
            data={params[0]}
            favIds={favIds}
            addFavSession={addFavSession}
            removeFavSession={removeFavSession}
          />
        )}
      </FavesContext.Consumer>
    );
  }
}

export default SessionContainer;
