import React from 'react';
import {Query} from 'react-apollo';
import Session from './Session';
import {Text} from 'react-native';
import Loader from '../../components/Loader';
import {QUERY_ALL_SESSIONS} from '../../apollo/index';

class SessionContainer extends React.Component {
  render() {
    return (
      <Query query={QUERY_ALL_SESSIONS}>
        {({loading, error, data}) => {
          if (loading) {
            return <Loader />;
          }

          if (error) {
            return <Text>Error</Text>;
          }
          if (data) {
            return <Session data={data} />;
          }
        }}
      </Query>
    );
  }
}

export default SessionContainer;
