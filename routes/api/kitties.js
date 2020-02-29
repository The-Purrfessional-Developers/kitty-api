const express = require("express");
const auth = require("../../middleware/auth");
const Kitty = require("../../models/Kitty");

const router = express.Router();

// @route GET api/kitties
// @desc Get kitty from database based on emotion
// @access Public
router.get("/", auth, async (req, res) => {
  try {
    const kitty = await Kitty.findOne({"emotion" : req.query.emotion});
    res.json(kitty);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server errror");
  }
});

module.exports = router;
