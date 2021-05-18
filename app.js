const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const http = require("http");

require("dotenv").config({ path: __dirname + "/.env" });
const app = express();
const port = 5000;

require("./db"); // initializes database

// use router
const indexRouter = require('./routes');
app.use('/api/v1', indexRouter)

app.get("/", (req, res) => {
  const params = {};
  res.end("Serve the frontend");
});

// START THE SERVER
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
