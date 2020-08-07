require("dotenv").config();

const express = require("express");
const logger = require("./middleware/logger");
const userRouter = require("./users/userRouter");
const postRouter = require("./posts/postRouter");

const server = express();
server.use(express.json());
server.use(logger);

server.get("/", (req, res) => {
  const message = process.env.MESSAGE || "It's working (once)";
  res.status(200).json({ message });
});

// Requests to any users endpoint is handled by userRouter
server.use("/users", userRouter);

// Requests to any posts endpoint is handled by postRouter
server.use("/posts", postRouter);

module.exports = server;
