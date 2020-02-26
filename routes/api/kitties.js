const express = require("express");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Kitty = require("../../models/Kitty");

const router = express.Router();

// @route GET api/kitties
// @desc Get kitty from database based on emotion
// @access Public
router.get("/", auth("public"), async (req, res) => {
  try {
    const kitty = await Kitty.findOne({"emotion" : req.body.emotion});
    res.json(kitty);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server errror");
  }
});

// @route   POST api/kitties
// @desc    Add kitty to database
// @access  Private
router.post(
  "/",
  [
    check("imageUrl", "imageUrl is required").not().isEmpty(),
    check("emotion", "emotion is required").not().isEmpty()
  ],
  auth("private"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const { imageUrl, emotion, isGif, owner, sourceUrl } = req.body;

    try {

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

      res.status(201).send(kitty);

    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server errror");
    }
  }
);



module.exports = router;
