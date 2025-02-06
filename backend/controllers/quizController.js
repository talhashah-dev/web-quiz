const Quiz = require("../models/Quiz");

exports.createQuiz = async (req, res) => {
  try {
    const { title, category, questions } = req.body;

    if (!["HTML", "CSS", "JavaScript", "Python"].includes(category)) {
      return res.status(400).json({ error: "Invalid category" });
    }

    const newQuiz = new Quiz({ title, category, questions });

    await newQuiz.save();

    res.status(201).json({ message: "Quiz created successfully!", quiz: newQuiz });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

exports.getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }
    res.status(200).json(quiz);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
