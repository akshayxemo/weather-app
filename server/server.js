const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const jwt = require("jsonwebtoken");
app.use(express.json());

// Import required modules
const http = require("http").Server(app);
const socketIO = require("socket.io");
app.use(cors({ origin: "*" }));

// Set up Socket.IO server
const io = socketIO(http, {
  cors: {
    origin: process.env.FRONTEND_API,
    methods: ["GET", "POST"],
    credentials: true,
  },
});
app.set("socket", io);

app.use(require("./api/route"));

// listening code
http.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
