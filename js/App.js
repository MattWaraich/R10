import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {LearnMoreLinks, Colors} from 'react-native/Libraries/NewAppScreen';
import AboutScreen from './screens/About';
import RootStackNavigator from './navigation/RootStackNavigator';
import SafeAreaView from 'react-native-safe-area-view';
import {ApolloProvider} from 'react-apollo';
import client from './config/api';
import FavesProvider from './context/FavesContext';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <RootStackNavigator />
        </FavesProvider>
        <SafeAreaView
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            paddingVertical: 5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
          }}
        />
      </ApolloProvider>
    );
  }
}
