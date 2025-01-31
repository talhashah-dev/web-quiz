const Result = require("../models/Result");

exports.submitResult = async (req, res) => {
  try {
    const { user, quiz, score, totalQuestions } = req.body;
    const newResult = new Result({ user, quiz, score, totalQuestions });
    await newResult.save();
    res.status(201).json({ message: "Result submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getResults = async (req, res) => {
  try {
    const results = await Result.find().populate("user quiz");
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
