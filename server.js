const config = require("config.json")("./config/default.json");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  config.mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("mongoDB connected...");
  }
);

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello");
});
app.post("/", (req, res) => {
  const item = req.body.item;
  console.log(item);
  res.send(item);
});
PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
