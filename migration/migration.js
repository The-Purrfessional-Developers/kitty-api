const {saveDataToDB} = require("../config/db");
const Kitty = require("../models/Kitty");
const data = require("./data");

const kitties = data.production;

saveDataToDB(Kitty, kitties);