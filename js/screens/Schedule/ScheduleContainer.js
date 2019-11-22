import React, {Component} from 'react';
import Schedule from './Schedule';
import {gql} from 'apollo-boost';
import {Query} from '@apollo/react-components';
import {Text} from 'react-native';
import styles from './styles';
import Loader from '../../components/Loader';

const ALL_SESSIONS = gql`
  query {
    allSessions(orderBy: startTime_ASC) {
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
          if (loading || !data) return <Loader />;
          if (error) return <Text>{error.message}</Text>;
          console.log(data);

          return <Schedule allSession={data.allSession} />;
        }}
      </Query>
    );
  }
} 

export default ScheduleContainer;
