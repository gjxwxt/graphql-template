const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  Mutation: {
    signup: async (_, { username, email, password }, { config }) => {
      // 这里应该添加用户注册逻辑
      const user = { id: "1", username, email }; // 模拟用户创建
      const token = jwt.sign({ userId: user.id }, config.jwtSecret);
      return { token, user };
    },
    login: async (_, { email, password }, { config }) => {
      // 这里应该添加用户登录逻辑
      const user = { id: "1", username: "testuser", email }; // 模拟用户查找
      const token = jwt.sign({ userId: user.id }, config.jwtSecret);
      return { token, user };
    },
  },
};
