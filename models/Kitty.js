const mongoose = require("mongoose");

const KittySchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true
  },
  emotion: {
    type: String,
    required: true,
  },
  isGif: {
    type: Boolean,
    default: false
  },
  owner: {
    type: String,
    default: "unkown"
  },
  sourceUrl: {
    type: String,
    default: "unkown"
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
});

module.exports = Kitty = mongoose.model("kitty", KittySchema);
