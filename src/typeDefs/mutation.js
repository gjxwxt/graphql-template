const { gql } = require("apollo-server-express");

module.exports = gql`
  type Mutation {
    """
    注册新用户
    """
    signup(username: String!, email: String!, password: String!): AuthPayload
    """
    用户登录
    """
    login(email: String!, password: String!): AuthPayload
  }
`;
