const Result = require("../models/Result");

const jwt = require("jsonwebtoken");

exports.submitResult = async (req, res) => {
  try {
    const { user, quiz, score, totalQuestions, answers } = req.body;

    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Authentication token is missing!" });
    }

    const decoded = jwt.verify(token, "secretKey");
    const userId = decoded.id;

    const newResult = new Result({ user: userId, quiz, score, totalQuestions });
    newResult.answers = answers;

    await newResult.save();
    res.status(201).json({ message: "Result saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getResultById = async (req, res) => {
  try {
    const result = await Result.findById(req.params.id).populate("user quiz");
    if (!result) {
      return res.status(404).json({ error: "Result not found" });
    }
    res.status(200).json(result); 
  } catch (error) {
    console.error(error);
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
