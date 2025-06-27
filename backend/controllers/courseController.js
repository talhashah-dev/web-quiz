const Course = require("../models/Course");
const UserCourseProgress = require("../models/UserCourseProgress");

// GET /api/courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/courses/:id
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/courses
exports.createCourse = async (req, res) => {
  try {
    const { title, category, description, lessons } = req.body;
    const course = new Course({ title, category, description, lessons });
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/courses/:id/enroll
exports.enrollInCourse = async (req, res) => {
  const { userId } = req.body;
  const courseId = req.params.id;

  try {
    const existing = await UserCourseProgress.findOne({ userId, courseId });
    if (existing) return res.status(400).json({ message: "Already enrolled" });

    const progress = new UserCourseProgress({ userId, courseId, completedLessons: [] });
    await progress.save();
    res.json({ message: "Enrolled", progress });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/courses/:id/complete/:lesson
exports.completeLesson = async (req, res) => {
  const { userId } = req.body;
  const { id, lesson } = req.params;

  try {
    const progress = await UserCourseProgress.findOne({ userId, courseId: id });
    if (!progress) return res.status(404).json({ message: "Not enrolled in course" });

    if (!progress.completedLessons.includes(Number(lesson))) {
      progress.completedLessons.push(Number(lesson));
      await progress.save();
    }

    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
