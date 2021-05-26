const winston = require("winston");
const path = require("path");

const { json , timestamp , printf , colorize , simple , combine } = winston.format
    

const logger = winston.createLogger({
  level: "info",
  format: combine(
    json(),
    timestamp(),
    printf(
      (info) => `${info.timestamp} [${info.level}]: ${info.message}`
    )
  ),
  // format: winston.format.json(),
  transports: [
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    new winston.transports.File({
      filename: "./logs/error.log",
      level: "error",
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
    new winston.transports.File({
      filename: "./logs/combined.log",
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
  ],
});

// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      level: "debug",
      format: winston.format.combine(
        colorize({ all: true }),
        simple()
      ),
    })
  );
}

module.exports = logger;
