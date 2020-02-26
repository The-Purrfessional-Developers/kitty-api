const {connectDB, disconnectDB} = require("./config/db");
const Kitty = require("./models/Kitty");
const kitties = require("./kitties");

//Creating function that will handle async kitty saving to database
const saveKitty = async (kittyToSave) => {
  try {

    //Connect Database
    await connectDB();

    const { imageUrl, emotion, isGif, owner, sourceUrl } = kittyToSave;
    //Creating new kitty file from Kitty schema
    kitty = new Kitty({
      imageUrl,
      emotion,
      isGif,
      owner,
      sourceUrl
    });

  //Saving kitty file to database
  await kitty.save();

  //Disconnect MongoDB server
  disconnectDB();

  } catch (err) {
    console.error(err.message);
  };
};

saveKitty(kitties.test);