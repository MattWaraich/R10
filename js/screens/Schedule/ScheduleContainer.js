import React, {Component} from 'react';
import Schedule from './Schedule';
import {gql} from 'apollo-boost';
import {Query} from '@apollo/react-components';
import {Text, ActivityIndicator, View} from 'react-native';
import styles from './styles';

class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      load: true,
    };
  }

  render() {
    return (
      <View>
        <Query
          query={gql`
            {
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
          `}>
          {({loading, error, data}) => {
            if (loading)
              return <ActivityIndicator size="large" style={styles.loader} />;
            if (error) return <Text>There was an error loading your data</Text>;
            if (data) {
              return (
                <Schedule
                  removeFave={removeFaveSession}
                  faveIds={faveIds}
                  allSession={data.allSession}
                />
              );
            }
          }}
        </Query>
      </View>
    );
  }
}

export default ScheduleContainer;
