const {connectDB, disconnectDB} = require("../config/db");
const Kitty = require("../models/Kitty");
const data = require("./data");

const kitties = data.test;

//Creating function that will handle async kitty saving to database
const saveData = async (kitties) => {
  try {

    //Connect Database
    await connectDB();

    //Insert kitties into database using Kitty data schemea
    await Kitty.insertMany(kitties);

    //Disconnect MongoDB server
    await disconnectDB();

  } catch (err) {
    console.error(err.message);
  };
};

saveData(kitties);