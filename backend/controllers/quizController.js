const Quiz = require("../models/Quiz");

exports.createQuiz = async (req, res) => {
  try {
    const { title, questions } = req.body;
    const newQuiz = new Quiz({ title, questions });
    await newQuiz.save();
    res.status(201).json({ message: "Quiz created successfully!" });
  } catch (error) {
    console.log(req.body)
    res.status(500).json({ error: "Server error" });
  }
};

exports.getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
};
