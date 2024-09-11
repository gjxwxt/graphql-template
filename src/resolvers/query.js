module.exports = {
  Query: {
    hello: () => "Hello, GraphQL!",
    me: (_, __, { user }) => {
      if (!user) {
        throw new Error("You are not authenticated");
      }
      return user;
    },
  },
};
