const mongoose = require("mongoose");

const userCourseProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  completedLessons: [Number], // array of lesson "order" values
});

module.exports = mongoose.model("UserCourseProgress", userCourseProgressSchema);
