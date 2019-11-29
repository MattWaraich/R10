import React, {Component} from 'react';
import {addFav, getAllFaves, removeFav} from '../../config/models';

export const FavesContext = React.createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
    };
  }
  componentDidMount() {
    this.getFavedSessionIds();
  }
  getFavedSessionIds = async () => {
    try {
      const faves = await getAllFaves();
      const ids = faves.map(fave => fave[0]);
      this.setState({faveIds: ids});
    } catch (e) {}
  };

  addFaveSessionId = async sessionId => {
    try {
      const newfav = await addFav(sessionId);
      if (newfav) {
        this.setState({faveIds: [...this.state.faveIds, newfav.id]});
      }
      this.getFavedSessionIds();
    } catch (e) {}
  };
  removeFaveSessionId = async sessionId => {
    try {
      await removeFav(sessionId);
      this.getFavedSessionIds();
    } catch (e) {}
  };
  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFaveSessionId: this.addFaveSessionId,
          removeFaveSessionId: this.removeFaveSessionId,
        }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export default FavesProvider;
