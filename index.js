const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routs/news.rout"));
app.use(require("./routs/categor.route"));
app.use(require("./routs/comments.route"));

mongoose.connect(
  "mongodb+srv://Magomed:Sup1001magomed@cluster1.om1j1fy.mongodb.net/News",
  (err) => {
    if (err) {
      console.log("err");
    }
    console.log("db connection");
    app.listen(3000, () => {
      console.log("started");
    });
  }
);
