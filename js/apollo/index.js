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

export const QUERY_ALL_SPEAKERS = gql`
  query($order: SessionOrderByInput) {
    allSpeakers(orderBy: $order) {
      id
      bio
      name
      session
    }
  }
`;

export const QUERY_ALL_SESSIONS = gql`
  query($order: SessionOrderByInput) {
    allSessions(orderBy: $order) {
      id
      description
      title
      startTime
      speaker {
        id
        bio
        image
        name
        session {
          id
        }
        url
      }
      location
    }
  }
`;
