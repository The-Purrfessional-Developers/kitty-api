const config = require("config");
const bcrypt = require("bcryptjs");

module.exports = async function(req, res, next) {
  // Get apiKey from header
  const key = req.query.key;

  //Checking if passes condition
  if (!key) {
    return res.status(400).json({
      msg: "No API key given."
    });
  };

  try {

    let keysMatch = await bcrypt.compare(key, config.get("securityKey"));

    if (!keysMatch) {
      return res.status(400).json({
        msg: "Invalid API key given."
      });
    } else {
      next();
    };

  } catch(error) {
    console.error(error.message);
    res.status(500).send("Server errror");
  }

};

