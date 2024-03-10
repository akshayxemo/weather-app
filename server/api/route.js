const express = require("express");
const router = express.Router();
const weatherAPi = require("../controllers/weatherApiController");
const userControl = require("../controllers/userController");
const authRequire = require("../middleware/require.auth");
router.get("/weather/:city", authRequire, weatherAPi.GetWeather);
router.post("/credential", userControl.getToken);
module.exports = router;
