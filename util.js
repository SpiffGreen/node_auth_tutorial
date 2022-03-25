const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "secretkldjfal";

const constants = {
  ADMIN_USER: "ADMIN_USER",
  BASIC_USER: "BASIC_USER",
};

const authenticate = async (req, res, next) => {
  if (!req.cookies.token) return res.status(401).redirect("/login");

  try {
    const decoded = jwt.verify(req.cookies.token, JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.redirect("/login");
  }
};

const adminAuth = (allowedRoles) => (req, res, next) => {
  let allowed = false;
  allowedRoles.forEach(i => {
    if(req?.user?.role === i) {
      allowed = true;
    }
  });
  if(!allowed) return res.render("error", { message: "You don't have enough priviledge to view this resource." });
  next();
}


module.exports = {
  constants,
  authenticate,
  adminAuth,
};
