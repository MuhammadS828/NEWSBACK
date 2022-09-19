const Categors = require("../models/Categors.model");

module.exports.categorController = {
  addCategor: async (req, res) => {
    const { name } = req.body;
    try {
      await Categors.create({
        name,
      }),
        res.json("added categor");
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteCategor: async (req, res) => {
    try {
      await Categors.findByIdAndDelete(req.params.id);
      res.json("categorDelete");
    } catch (error) {
      res.json(error.message);
    }
  },
  getAllCategor: async (req, res) => {
    try {
      const categ = await Categors.find({});
      res.json(categ);
    } catch (error) {
      res.json(error.message);
    }
  },
};
