const { mergeResolvers } = require("@graphql-tools/merge");
const query = require("./query");
const mutation = require("./mutation");
const user = require("./user");

const resolvers = mergeResolvers([query, mutation, user]);

module.exports = resolvers;
