import React, {Component} from 'react';
import Schedule from './Schedule';
import {Query} from '@apollo/react-components';
import {Text} from 'react-native';
import Loader from '../../components/Loader';
import {QUERY_ALL_SESSIONS} from '../../apollo';
import {formatSessionData} from '../../lib/dataFormatHelper';

class ScheduleContainer extends Component {
  render() {
    const {navigation} = this.props;
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
            const formattedData = formatSessionData(data.allSessions);
            return <Schedule navigation={navigation} data={formattedData} />;
          }
        }}
      </Query>
    );
  }
}

export default ScheduleContainer;
