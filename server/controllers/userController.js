const jwt = require("jsonwebtoken");
module.exports = {
  getToken: async (req, res) => {
    try {
      const { uuid } = req.body;
      const token = await jwt.sign({ uuid: uuid }, process.env.JWT_SECRET_KEY, {
        expiresIn: "7d",
      });
      res.status(200).json({ message: "success", token: token });
    } catch (err) {
      res.status(400).json({ message: "server failure..", error: err });
    }
  },
};
