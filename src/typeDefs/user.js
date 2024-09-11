const { gql } = require("apollo-server-express");

module.exports = gql`
  """
  用户类型，表示系统中的一个用户
  """
  type User {
    """
    用户的唯一标识符
    """
    id: ID!
    """
    用户的用户名
    """
    username: String!
    """
    用户的电子邮件地址
    """
    email: String!
  }
`;
