const express = require("express");
const auth = require("../../middleware/auth");
const Kitty = require("../../models/Kitty");

const router = express.Router();

// @route GET api/kitties
// @desc Get kitty from database based on emotion
// @access Public
router.get("/", auth, async (req, res) => {
  try {
    const kitty = await Kitty.aggregate([
      {$match: {emotion : req.query.emotion}},
      {$sample: {size: 1}}
    ]);
    res.json(kitty);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server errror");
  }
});

module.exports = router;
