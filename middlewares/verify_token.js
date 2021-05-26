const jwt = require("jsonwebtoken");
const auth_config = require("../config/auth.config");

const verify_token = async (req, res, next) => {
  const req_token = req.get("x-access-token");

  if (!req_token || req_token === "") {
    res.status(403).json({
      message: "Invalid Token.",
    });
  }

  try {
    const decoded_token = jwt.verify(token, auth_config.secret);
    req.is_authorized = true;
    req.user_id = decodedToken.id;
    req.access_token = token;
    req.decoded_access_token = decoded_token;
  } catch (e) {
    res.status(400).json({
      message: "Error Ocuured.",
      e,
    });
  }
  next();
};
module.exports = verify_token;
