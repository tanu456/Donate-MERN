const mongoose = require("mongoose");
const logger = require("./utils/logger");

// database config
const { db } = require("./config/db");

const dbURI = `mongodb+srv://${db.user}:${encodeURIComponent(db.password)}@${
  db.host
}/${db.name}`;
const url ='mongodb://127.0.0.1:27017/donate'
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  autoIndex: true,
  poolSize: 10,
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
};

logger.info("Database Url : ", dbURI);

//Create the databse connection
try {
  mongoose.connect(url, options);
  logger.info("Mongoose connection done");
} catch (err) {
  logger.error("Mongoose connection error", err);
}
// Events

// Successfully Connected
mongoose.connection.on("connected", () => {
  logger.info("Mongoose default connection open to " + dbURI);
});

// If the connection thorows an error
mongoose.connection.on("error", (err) => {
  logger.error("Mongoose default connection error: " + err);
});

// When the connection is disconnected
mongoose.connection.on("disconnected", () => {
  logger.info("Mongoose default connection disconnected");
});
