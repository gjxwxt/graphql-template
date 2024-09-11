const { gql } = require("apollo-server-express");

module.exports = gql`
  type AuthPayload {
    token: String!
    user: User!
  }
`;
