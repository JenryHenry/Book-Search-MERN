import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        savedBooks
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookId: String!, $title: String!, $description: String!, $authors: [String], $image: String, $link: String) {
    saveBook(bookId: $bookId, title: $title, description: $description, authors: $authors, image: $image, link: $link) {
      _id
      username
      email
      savedBooks {
        bookId
        title
        description
        authors
        image
        link
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($bookId: String!) {
    deleteBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        bookId
        title
        description
        authors
        image
        link
      }
    }
  }
`;

