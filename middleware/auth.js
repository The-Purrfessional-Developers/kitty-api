const config = require("../config/default");

module.exports = function(securityLevel) {
  return (req, res, next) => {
    // Get apiKey from header
    const key = req.body.key;
    try {
      //Creating the authentication condition based on securityLevel
      let isAuth;
      if (securityLevel === "public") {
        isAuth = (key && (key === config.privateKey || key === config.publicKey));
      } else if (securityLevel === "private") {
        isAuth = (key && key === config.privateKey);
      } else {
        throw Error("Something went wrong in the security middleware!");
      };

      //Checking if passes condition
      if (isAuth) {
        next();
      } else {
        return res.status(401).json({
          msg: "No API key given, or key is invalid."
        });
      };
    
    } catch(error) {
      res.status(500).send();
    }
  };
};

