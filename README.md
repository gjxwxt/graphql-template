# GraphQL API 项目模板

这是一个使用 Node.js, Express, Apollo Server 和 Sequelize 构建的 GraphQL API 项目模板。

## 目录结构

- `src/`: 源代码目录
  - `db/`: 数据库相关文件
    - `models/`: Sequelize 模型定义
  - `resolvers/`: GraphQL 解析器
  - `typeDefs/`: GraphQL 类型定义
  - `utils/`: 工具函数
  - `index.js`: 应用程序入口点
- `tests/`: 测试文件目录
- `doc/`: 文档目录
  - `schema/`: 自动生成的 API 文档
- `.env`: 环境变量配置文件
- `.gitignore`: Git 忽略文件
- `package.json`: 项目依赖和脚本
- `README.md`: 项目说明文档
- `server.js`: 服务器启动文件

## 快速开始

1. 克隆仓库:

   ```shell
   git clone https://github.com/gjxwxt/graphql-template.git
   ```

2. 安装依赖:

   ```shell
   npm install
   ```

3. 创建 `.env` 文件并设置环境变量:

   ```env
   DB_HOST=localhost
   DB_PORT=40000
   DB_NAME=your_database_name
   DB_USER=your_username
   DB_PASSWORD=your_password
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   PORT=50000
   ```

4. 启动服务器:

   ```shell
   npm start
   ```

5. 访问 GraphQL Playground: `http://localhost:50000/graphql`

## 开发指南

### 添加新的 GraphQL 类型

1. 在 `src/typeDefs/` 目录下创建新的类型定义文件。
2. 在 `src/typeDefs/index.js` 中导入并合并新的类型定义。

### 实现解析器

1. 在 `src/resolvers/` 目录下创建新的解析器文件。
2. 在 `src/resolvers/index.js` 中导入并合并新的解析器。

### 数据库操作

- 使用 Sequelize 在 `src/db/` 目录下定义模型。
- 在解析器中导入模型并进行数据库操作。

## 主要依赖说明

- `express`: Web 应用框架
- `apollo-server-express`: 用于 Express 的 Apollo Server 集成
- `graphql`: GraphQL JavaScript 实现
- `sequelize`: ORM 工具，用于数据库操作
- `jsonwebtoken`: 用于生成和验证 JWT
- `bcryptjs`: 用于密码哈希
- `dotenv`: 用于加载环境变量
- `winston`: 日志记录工具

## 文档生成

项目使用 GraphDoc 自动生成 API 文档。文档位于 `doc/schema/` 目录下。

要更新文档，运行: graphdoc -e <http://localhost:40000/graphql> -o ./doc/schema

## 测试

运行测试: npm run test

## 部署

1. 确保设置了正确的环境变量。
2. 在生产环境中，设置 `NODE_ENV=production`。
3. 使用 PM2 或类似工具来管理 Node.js 进程。

## 贡献

欢迎提交 Pull Requests。对于重大更改，请先开 issue 讨论您想要改变的内容。

## 许可

[MIT](https://choosealicense.com/licenses/mit/)
