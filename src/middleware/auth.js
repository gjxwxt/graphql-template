const jwt = require("jsonwebtoken");
const config = require("../../config/database");
const authConfig = require("../config/auth");

const authMiddleware = (req, res, next) => {
  // 获取操作名称
  const operationName =
    req.body?.operationName || req.body?.query?.match(/^\s*(\w+)/)?.[1];

  // 如果操作在白名单中，跳过身份验证
  if (authConfig.publicOperations.includes(operationName)) {
    return next();
  }

  const token = req.headers.authorization || "";

  if (!token) {
    req.user = null;
    return next();
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded;
  } catch (err) {
    req.user = null;
  }
  next();
};

module.exports = authMiddleware;
