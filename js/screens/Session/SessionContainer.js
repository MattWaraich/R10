import React from 'react';
import Session from './Session';
import {FavesContext} from '../../context/FavesContext';

class SessionContainer extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <FavesContext.Consumer>
        {({faveIds, addFaveSessionId, removeFaveSessionId}) => {
          return (
            <Session
              data={navigation.state.params[0]}
              faveIds={faveIds}
              addFaveSessionId={addFaveSessionId}
              removeFaveSessionId={removeFaveSessionId}
              navigation={navigation}
            />
          );
        }}
      </FavesContext.Consumer>
    );
  }
}

export default SessionContainer;
