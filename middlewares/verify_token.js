const jwt = require("jsonwebtoken");
const auth_config = require("../config/auth.config");
require("dotenv").config();

const verify_token = async (req, res, next) => {
  const req_token = req.get("Authorization");

  if (!req_token || req_token === "") {
    res.status(403).json({
      message: "Invalid Token.",
    });
  }

  try {
    const decoded_token = jwt.verify(req_token, process.env.SECRET);
    req.is_authorized = true;
    req.user_id = decoded_token.id;
    req.access_token = req_token;
    req.decoded_access_token = decoded_token;
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
  next();
};
module.exports = verify_token;
