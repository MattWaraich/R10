import React, {Component} from 'react';
import {FlatList} from 'react-native';

class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourited: false,
    };
  }
  render() {
    const {data} = this.props;
    return (
      <FlatList
        keyExtractor={item => item.id + ''}
        data={data}
        renderItem={{item}}
      />
    );
  }
}
export default Session;
