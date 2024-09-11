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
const db = require("./src/db");
const path = require("path");

// 定义不需要认证的操作白名单
const publicOperations = ["login", "signup"];

async function startServer() {
  const app = express();

  // 添加CORS中间件
  app.use(cors());

  // JWT验证中间件
  const getUser = (token) => {
    if (token) {
      try {
        return jwt.verify(token, config.jwtSecret);
      } catch (err) {
        throw new Error("Session invalid");
      }
    }
  };

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }) => {
      // 获取操作名称
      const operationName = req.body.operationName;

      // 如果操作在白名单中，不进行token验证
      if (publicOperations.includes(operationName)) {
        return { config };
      }

      // 对于其他操作，进行token验证
      const token = req.headers.authorization || "";
      const user = getUser(token);
      return { config, user };
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

  try {
    await db.authenticate();
    logger.info("Database connection has been established successfully.");
  } catch (error) {
    logger.error("Unable to connect to the database:", error);
  }
}

startServer();
