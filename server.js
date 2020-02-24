const express = require("express");
const connectDB = require("./config/db");

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
