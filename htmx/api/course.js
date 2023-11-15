const router = require("express").Router();
const db = require("../models");

router.get("/list", async (req, res) => {
  const courses = await db.Course.find().sort("courseid");
  res.status(200).json(courses);
});

router.get("/:courseid", async (req, res) => {
  const course = await db.Course.findOne({ courseid: req.params.courseid });
  res.status(200).json(course);
});

router.post("/update", async (req, res) => {
  const course = await db.Course.findOneAndUpdate(
    { courseid: req.body.courseid },
    {
      $set: req.body,
    },
    { new: true }
  );
  res.status(200).json(course);
});

module.exports = router;
