const mongoose = require("mongoose");
const express = require("express");
const authRouter = require("./authRouter");
const articlesRouter = require("./articleRouter");
const uploadRouter = require("./uploadRouter");
const app = express();
const port = 3000;

app.use(express.json());

// Global middleware
// app.use((req, res, next) => {
//   console.log("Time", Date.now(), "From index");
//   // return res.status(403).send("Forbidden"); // man qilish uchun!
//   next();
// })

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("api", authRouter);
app.use("api", articlesRouter);
// app.use("/", uploadRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose.connect('mongodb://localhost:27017/express');


