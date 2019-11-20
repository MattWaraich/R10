import React from 'react';
import About from './About';
import {ActivityIndicator} from 'react-native';
import styles from './styles';

class AboutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  render() {
    // return this.state.data ? (
    //   <About data={this.state.data.results} />
    // ) : (
    //   <ActivityIndicator size="large" />
    // );
    return <About />;
  }
}

export default AboutContainer;
