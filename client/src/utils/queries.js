import { gql } from '@apollo/client';

export const GET_USER = gql`
  query user {
    user {
      _id
      username
      savedBooks {
        _id
        authors
        description
        title
      }
    }
  }
`;
