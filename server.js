const express = require("express");
const {connectDB} = require("./config/db");
const startServer = require("./config/startServer");
const config = require("config");

const app = express();

//Connect Database
connectDB();

// Init body-parsing middleware
app.use(
  express.json({
    extended: false
  })
);

// Basic GET 
app.get("/", (req, res) => {
  res.send("API running.");
});

// API routes
app.use("/api/kitties", require("./routes/api/kitties"));

startServer(app, config);