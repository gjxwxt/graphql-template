const logger = require("./logger");

class CustomError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

const errorHandler = (err, req, res, next) => {
  logger.error(err.message);

  if (err instanceof CustomError) {
    return res.status(err.code).json({ error: err.message });
  }

  res.status(500).json({ error: "Internal server error" });
};

module.exports = { CustomError, errorHandler };
