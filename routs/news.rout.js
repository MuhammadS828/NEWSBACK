const { Router } = require("express");
const { newsConntroller } = require("../controllers/news.controller");
const router = Router();

router.post("/news", newsConntroller.addNews);
router.delete("/news/:id", newsConntroller.deleteNews);
router.patch("/news/:id", newsConntroller.updateNewsById);
router.get("/news/:id", newsConntroller.getNewsById);
router.get("/news", newsConntroller.getNews);
router.get("/news/bycategor/:id", newsConntroller.getNewsbyCategor);

module.exports = router;
