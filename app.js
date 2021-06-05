const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const logger = require("./utils/logger");

require("dotenv").config({ path: __dirname + "/.env" });
const app = express();
const morgan = require("morgan");
const cors = require("cors");

var accessLogStream = fs.createWriteStream(
  path.join(__dirname, "logs", "access.log")
);

// setup the logger
app.use(morgan("common", { stream: accessLogStream }));

//allow cross origin resource sharing
app.use(cors());

const port = 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

require("./db"); // initializes database

// use router
const indexRouter = require("./routes");
app.use("/api/v1", indexRouter);

app.get("/", (req, res) => {
  const params = {};
  res.end("Serve the frontend");
});

// START THE SERVER
app.listen(port, () => {
  logger.info(`The application started successfully on port ${port}`);
});
