const {connectDB, disconnectDB} = require("./config/db");
const Kitty = require("./models/Kitty");
const kitties = require("./kitties");

const kittiesToSave = kitties.test;

//Creating function that will handle async kitty saving to database
const saveKitties = async (kittiesToSave) => {
  try {

    //Connect Database
    await connectDB();

    //Insert kitties into database using Kitty data schemea
    await Kitty.insertMany(kittiesToSave);

    //Disconnect MongoDB server
    await disconnectDB();

  } catch (err) {
    console.error(err.message);
  };
};

saveKitties(kittiesToSave);