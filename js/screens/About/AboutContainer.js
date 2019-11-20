import React from 'react';
import {Query} from 'react-apollo';
import {QUERY_ALL_CONDUCTS} from '../../apollo/index';
import About from './About';
import Loader from '../../components/Loader';
import styles from './styles';

class AboutContainer extends React.Component {
  render() {
    return (
      <Query query={QUERY_ALL_CONDUCTS}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <Text>Error</Text>;
          if (data) return <About data={data} />;
        }}
      </Query>
    );
  }
}

export default AboutContainer;
