require("dotenv").config();

const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const typeDefs = require("./src/typeDefs/index");
const resolvers = require("./src/resolvers/index");
const config = require("./config/database");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { errorHandler } = require("./src/utils/errorHandler");
const logger = require("./src/utils/logger");
const path = require("path");
const authMiddleware = require("./src/middleware/auth");

async function startServer() {
  const app = express();

  // 添加CORS中间件
  app.use(cors());

  // 添加身份验证中间件
  app.use(authMiddleware);

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }) => {
      return {
        user: req.user,
        config,
      };
    },
    formatError: (error) => {
      logger.error(error);
      return error;
    },
    playground: process.env.NODE_ENV !== "production",
    introspection: process.env.NODE_ENV !== "production",
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.use(errorHandler);

  // 添加静态文件服务
  app.use("/docs", express.static(path.join(__dirname, "doc")));

  const PORT = process.env.PORT || 50000;
  app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}/graphql`);
    logger.info(`GraphQL Playground: http://localhost:${PORT}/docs/schema`);
  });
}

startServer();
