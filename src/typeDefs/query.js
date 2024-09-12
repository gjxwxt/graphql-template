const { gql } = require("apollo-server-express");

module.exports = gql`
  type Query {
    hello: String
    me: String
    users(
      username: String
      age: Int
      pageNum: Int!
      pageSize: Int!
    ): UserConnection!
  }

  type User {
    id: ID!
    username: String!
  }

  type UserConnection {
    edges: [User!]!
    pageInfo: PageInfo
  }
`;
