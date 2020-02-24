const express = require("express");
const { check, validationResult } = require("express-validator");
const Kitty = require("../../models/Kitty");

const router = express.Router();

// @route   POST api/kitties
// @desc    Add kitty to database
// @access  Private
router.post(
  "/",
  [
    check("imgUrl", "imgUrl is required").not().isEmpty(),
    check("emotion", "emotion is required").not().isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const { imgUrl, emotion, isGif, owner, sourceUrl } = req.body;

    try {

      //Creating new kitty file from Kitty schema
      kitty = new Kitty({
        imgUrl,
        emotion,
        isGif,
        owner,
        sourceUrl
      });

      //Saving kitty file to database
      await kitty.save();

    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server errror");
    }
  }
);

module.exports = router;
