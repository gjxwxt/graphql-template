const { mergeTypeDefs } = require("@graphql-tools/merge");
const user = require("./user");
const auth = require("./auth");
const query = require("./query");
const mutation = require("./mutation");

const types = [user, auth, query, mutation];

module.exports = mergeTypeDefs(types);
