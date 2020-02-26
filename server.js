const express = require("express");
const {connectDB} = require("./config/db");
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

const PORT = config.get("PORT");

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
