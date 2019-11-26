import React, {Component} from 'react';
import {QUERY_ALL_SESSIONS} from '../../apollo';
import {Query} from 'react-apollo';
import Favs from './Faves';
import {Text} from 'react-native';
import {formatSessionData} from '../../lib/dataFormatHelper';
import {FavesContext} from '../../context/FavesContext/FavesContext';
import Loader from '../../components/Loader';

class FavesContainer extends Component {
  static navigationOptions = {
    title: 'Favourites',
  };
  render() {
    const {navigation} = this.props;
    return (
      <FavesContext.Consumer>
        {({favIds}) => (
          <Query query={QUERY_ALL_SESSIONS}>
            {({loading, error, data}) => {
              if (loading) return <Loader />;
              if (error) return <Text>Error: {error}</Text>;
              let filteredData = data.allSessions.filter(session =>
                favIds.includes(session.id),
              );
              const formattedData = formatSessionData(filteredData);
              return <Favs navigation={navigation} data={formattedData} />;
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    );
  }
}

export default FavesContainer;
