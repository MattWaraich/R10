import React, {Component} from 'react';
import Schedule from './Schedule';
import {gql} from 'apollo-boost';
import {Query} from '@apollo/react-components';
import {Text} from 'react-native';
// import styles from './styles';
import Loader from '../../components/Loader';
import {QUERY_ALL_SESSIONS} from '../../apollo';

class ScheduleContainer extends Component {
  render() {
    return (
      <Query query={QUERY_ALL_SESSIONS}>
        {({loading, error, data}) => {
          if (loading) {
            return <Loader />;
          }

          if (error) {
            return <Text>{error.message}</Text>;
          }

          if (data) {
            return <Schedule allSession={data.allSessions} />;
          }
        }}
      </Query>
    );
  }
}

export default ScheduleContainer;
