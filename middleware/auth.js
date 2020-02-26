const config = require("config");

module.exports = function(req, res, next) {
  // Get apiKey from header
  const key = req.body.key;

  //Checking if passes condition
  if (!key || key !== config.get("securityKey")) {
    return res.status(401).json({
      msg: "No API key given, or key is invalid."
    });
  } else {
    next();
  };
};

