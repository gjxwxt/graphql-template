// 基础类型定义
const { gql } = require("apollo-server-express");

module.exports = gql`
  type BaseResponse {
    code: Int!
    message: String!
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    currentPage: Int!
    totalPages: Int!
  }
`;
