import React, {Component} from 'react';
import {QUERY_ALL_SESSIONS} from '../../apollo';
import {Query} from 'react-apollo';
import Faves from './Faves';
import {Text} from 'react-native';
import {formatSessionData} from '../../lib/dataFormatHelper';
import {FavesContext} from '../../context/FavesContext';
import Loader from '../../components/Loader';

class FavesContainer extends Component {
  static navigationOptions = {
    title: 'Favourites',
  };
  render() {
    const {navigation} = this.props;
    return (
      <FavesContext.Consumer>
        {({favIds}) => {
          return (
            <Query query={QUERY_ALL_SESSIONS}>
              {({loading, error, data}) => {
                if (loading) return <Loader />;
                if (error) return <Text>Error : {error}</Text>;
                if (data) {
                  let filteredData = data.allSessions.filter(session => {
                    console.log(favIds);
                  });
                  console.log(filteredData);
                  return <Text>Test again</Text>;
                }
              }}
            </Query>
          );
        }}
      </FavesContext.Consumer>
    );
  }
}

export default FavesContainer;
