const mongoose = require("mongoose");
const categorsSchema = mongoose.Schema({
  name: String,
});
const Categors = mongoose.model("Categors", categorsSchema);

module.exports = Categors;
