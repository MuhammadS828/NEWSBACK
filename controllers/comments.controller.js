const Comments = require("../models/Comments.model");

module.exports.commentsController = {
  addCommenst: async (req, res) => {
    const { name, text, _NewsId } = req.body;
    try {
      await Comments.create({
        name,
        text,
        _NewsId,
      }),
        res.json("added comment");
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteComments: async (req, res) => {
    try {
      await Comments.findByIdAndDelete(req.params.id);
      res.json("mission complited");
    } catch (error) {
      res.json(error.message);
    }
  },
  getAllCommentsbyNews: async (req, res) => {
    try {
      const comments = await Comments.find({ newsId: req.params.id });
      res.json(comments);
    } catch (error) {
      res.json(error.message);
    }
  },
};
