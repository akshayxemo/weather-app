const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: "You must be logged in" });
  }
  const token = authorization.replace("Bearer ", "");
  // console.log(token);
  jwt.verify(token, process.env.JWT_SECRET_KEY, (error, payload) => {
    if (error) {
      return res.status(401).json({ message: "you must be logged in" });
    }
    next();
  });
};
