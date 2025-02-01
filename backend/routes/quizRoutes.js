const express = require("express");
const { createQuiz, getQuizzes, getQuizById } = require("../controllers/quizController");
const router = express.Router();

router.post("/", createQuiz);
router.get("/", getQuizzes);
router.get("/:id", getQuizById);

module.exports = router;
