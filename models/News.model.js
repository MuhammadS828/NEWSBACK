const mongoose = require("mongoose");
const newsSchema = mongoose.Schema({
  tittle: String,
  text: String,
  _categorId: {
    type: mongoose.SchemaTypes.ObjectId,
  },
});
const News = mongoose.model("News", newsSchema);

module.exports = News;
