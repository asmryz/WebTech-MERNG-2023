var express = require("express");
var router = express.Router();
const ctrlCourse = require("../controllers/courseController");

/* GET home page. */
router.get("/list", ctrlCourse.courseList);
router.get("/courseid", ctrlCourse.getCourseById);
router.post("/update", ctrlCourse.updateCourse);

module.exports = router;
