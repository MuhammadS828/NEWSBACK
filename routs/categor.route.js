const { Router } = require("express");
const { categorController } = require("../controllers/categor.controller");

const router = Router();

router.delete("/categor", categorController.deleteCategor);
router.post("/categor", categorController.addCategor);
router.get("/categor", categorController.getAllCategor);

module.exports = router;
