const mongoose = require("mongoose");

// database config
const { db } = require("./config/db");

const dbURI = `mongodb+srv://${db.user}:${encodeURIComponent(db.password)}@${
  db.host
}/${db.name}`;

const url ='mongodb://127.0.0.1:27017/donate';
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

console.log("Database Url : ", dbURI);

//Create the databse connection
try {
  mongoose.connect(url, options);
  console.log("Mongoose connection done");
} catch (e) {
  console.log("Mongoose connection error");
  console.log(e);
}

// Events

// Successfully Connected
mongoose.connection.on("connected", () => {
  console.log("Mongoose default connection open to " + dbURI);
});

// If the connection thorows an error
mongoose.connection.on("error", (err) => {
  console.log("Mongoose default connection error: " + err);
});

// When the connection is disconnected
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose default connection disconnected");
});
