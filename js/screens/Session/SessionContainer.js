import React, {Component} from 'react';
import Session from './Session';

class SessionContainer extends React.Component {
  render() {
    return (
      <Query query={QUERY_ALL_SESSIONS}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <Text>Error</Text>;
          if (data) return <Session data={data} />;
        }}
      </Query>
    );
  }
}

export default SessionContainer;
