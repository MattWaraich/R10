import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

export const QUERY_ALL_CONDUCTS = gql`
  query getAllConducts($order: ConductOrderByInput) {
    allConducts(orderBy: $order) {
      id
      description
      title
      order
    }
  }
`;

// dont include speaker, location
export const QUERY_ALL_SESSIONS = gql`
  query {
    allSessions {
      id
      description
      startTime
      title
    }
  }
`;

export const QUERY_ALL_SPEAKERS = gql`
  query {
    allSpeakers {
      id
      bio
      name
      session
    }
  }
`;

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://r10.academy.red/graphql',
});

const client = new ApolloClient({
  link,
  cache,
});

export default new ApolloClient({
  link,
  cache,
});
