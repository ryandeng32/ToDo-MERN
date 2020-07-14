const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello");
});
app.post("/", (req, res) => {
  console.log(req.body);
});
PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
