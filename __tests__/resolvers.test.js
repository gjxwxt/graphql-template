const { Query } = require("../src/resolvers/query");

describe("Query Resolvers", () => {
  test("hello resolver should return greeting", () => {
    expect(Query.hello()).toBe("Hello, GraphQL!");
  });
});
