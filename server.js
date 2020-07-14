const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello");
});

PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
