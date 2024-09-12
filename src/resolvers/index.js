const { mergeResolvers } = require("@graphql-tools/merge");
const query = require("./query");
const login = require("./login");

const resolvers = mergeResolvers([query, login]);

module.exports = resolvers;
