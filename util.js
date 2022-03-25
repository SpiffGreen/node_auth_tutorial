const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "secretkldjfal"

const constants = {
    ADMIN_USER: "ADMIN_USER",
    BASIC_USER: "BASIC_USER"
};

const authenticate = async (req, res, next) => {
    const token = req.header("x-auth-token");
    if (!token) {
      return res
        .status(401)
        .redirect("/login")
        // .json({ success: false, msg: "No token, authorization denied" });
    }
  
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded.user;
      next();
    } catch (err) {
        res.redirect("/login");
    //   res.status(401).json({ success: false, msg: "Token is invalid" });
    }
  };
  
  module.exports = {
    constants,
    authenticate
  };