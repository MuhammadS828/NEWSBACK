const { Router } = require("express");
const { commentsController } = require("../controllers/comments.controller");

const router = Router();

router.post("/comments", commentsController.addCommenst);
router.delete("/comments/:id", commentsController.deleteComments);
router.get("/comments/:id", commentsController.getAllCommentsbyNews);

module.exports = router;
