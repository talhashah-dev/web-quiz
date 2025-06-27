const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  order: Number,
  title: String,
  description: String,
  videoUrl: String, // Google Drive link or YouTube
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, default: "AI" },
  description: String,
  lessons: [lessonSchema],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", courseSchema);
