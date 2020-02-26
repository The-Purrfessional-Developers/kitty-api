const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.log(err.message);

    //Exit process with failure
    process.exit(1);
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.connection.close(db);
    console.log("MongoDB Disconnected...");
    process.exit(0);
  } catch (err) {
    console.log(err.message);

    //Exit process with failure
    process.exit(1);
  }
};

const saveDataToDB = async (Model, data) => {
  try {

    //Connect Database
    await connectDB();

    //Insert kitties into database using Kitty data schemea
    await Model.insertMany(data);

    //Disconnect MongoDB server
    await disconnectDB();

  } catch (err) {
    console.error(err.message);
  };
};

module.exports = {connectDB, disconnectDB, saveDataToDB};
