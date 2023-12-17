const mongoose = require("mongoose");
const express = require("express");
const app = express();
const authRouter = require("./authRouter");
const articleRouter = require("./articleRouter");

const port = 3000;

app.use(express.json());

app.use("/api", authRouter);
app.use("/api", articleRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

mongoose.connect("mongodb://localhost:27017/express");
