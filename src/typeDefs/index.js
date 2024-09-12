const { mergeTypeDefs } = require("@graphql-tools/merge");
const base = require("./base");
const auth = require("./auth");
const query = require("./query");
const login = require("./login");

const types = [base, auth, query, login];

module.exports = mergeTypeDefs(types);
