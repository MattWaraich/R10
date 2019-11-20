import React, {Component} from 'react';
import Schedule from './Schedule';
import {gql} from 'apollo-boost';
import {Query} from '@apollo/react-components';
import {Text, ActivityIndicator} from 'react-native';
import styles from './styles';

const ALL_SESSIONS = gql`
  query {
    allSessions {
      id
      description
      location
      startTime
      title
      speaker {
        id
        bio
        image
        name
        url
      }
    }
  }
`;

class ScheduleContainer extends Component {
  render() {
    return (
      <Query query={ALL_SESSIONS}>
        {({loading, error, data}) => {
          if (loading)
            return <ActivityIndicator size="large" style={styles.loader} />;
          if (error) return <Text>{error.message}</Text>;
          if (data) {
            return <Schedule allSession={data.allSession} />;
          }
        }}
      </Query>
    );
  }
}

export default ScheduleContainer;
