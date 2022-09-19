const News = require("../models/News.model");

module.exports.newsConntroller = {
  addNews: async (req, res) => {
    const { text, tittle, _categorId } = req.body;
    try {
      await News.create({
        tittle,
        text,
        _categorId,
      });
      res.json("added");
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteNews: async (req, res) => {
    try {
      await News.findByIdAndDelete(req.params.id);
      res.json("News deleted");
    } catch (error) {
      res.json(error.message);
    }
  },
  updateNewsById: async (req, res) => {
    try {
      await News.findByIdAndUpdate(req.params.id, { tittle: req.body.tittle });
      res.json("News update");
    } catch (error) {
      res.json(error.message);
    }
  },
  getNewsById: async (req, res) => {
    try {
      const news = await News.findById(req.params.id);
      res.json(news);
    } catch (error) {
      res.json(error.message);
    }
  },
  getNews: async (req, res) => {
    try {
      const news = await News.find({});
      res.json(news);
    } catch (error) {
      res.json(error);
    }
  },
  getNewsbyCategor: async (req, res) => {
    try {
      const news = await News.find({ _categorId: req.params.id });
      res.json(news);
    } catch (error) {
      res.json(error.message);
    }
  },
};
