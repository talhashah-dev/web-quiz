const express = require("express");
const router = express.Router();
const controller = require("../controllers/courseController");

router.get("/", controller.getAllCourses);
router.get("/:id", controller.getCourseById);
router.post("/", controller.createCourse);
router.post("/:id/enroll", controller.enrollInCourse);
router.post("/:id/complete/:lesson", controller.completeLesson);

module.exports = router;
