const serviceFactory = require("../services/ServiceFactory");

module.exports = {
  Query: {
    hello: () => "Hello, GraphQL!",
    me: (_, __, { user }) => {
      if (!user) {
        throw new Error("您未经过身份验证");
      }
      return user;
    },
    users: (_, args) => serviceFactory.getUserService().getUsers(args),
  },
};
