const typeDefs = `
  type Book {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookId: String!, title: String!, description: String!, authors: [String], image: String, link: String): User
    deleteBook( bookId: String!): User
  }
`;

module.exports = typeDefs;
