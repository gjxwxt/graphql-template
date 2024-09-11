const { gql } = require("apollo-server-express");

module.exports = gql`
  type Query {
    """
    返回一个问候消息
    """
    hello: String
    """
    返回当前认证用户的信息
    """
    me: User
  }
`;
