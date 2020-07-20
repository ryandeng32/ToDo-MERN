const config = require("config.json")("./config/default.json");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

mongoose.connect(process.env.MONGO_URI || config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const ItemSchema = {
  name: String,
};
const Item = mongoose.model("item", ItemSchema);

const item1 = new Item({
  name: "Welcome to the todolist!",
});
const item2 = new Item({
  name: "Hit the + button to add",
});
const item3 = new Item({
  name: "<-- Hit this to delete an item",
});

const defaultItems = [item1, item2, item3];

app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  Item.find({}, (err, foundItems) => {
    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully saved default items");
        }
      });
      return res.json(defaultItems);
    }
    res.json(foundItems);
  });
});

app.post("/api", (req, res) => {
  const itemName = req.body.item;
  const item = new Item({
    name: itemName,
  });
  item.save();
  res.send(item);
});

app.delete("/api/:id", (req, res) => {
  Item.findByIdAndRemove(req.params.id, (err) => {
    if (!err) {
      res.send("Success");
    }
  });
});

// Serve static if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
