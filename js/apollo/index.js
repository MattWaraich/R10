import gql from 'graphql-tag';
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
