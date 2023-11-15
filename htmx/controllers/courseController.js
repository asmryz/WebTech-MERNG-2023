const api = require("../api/api");

exports.courseList = async (req, res) => {
  const courses = await api.get("/api/courses/list");
  //console.log(courses.data);
  res.render("list", { courses: courses.data });
};

exports.getCourseById = async (req, res) => {
  console.log(req.query);
  const courseid = req.query.courseid;
  const course = await api.get(`/api/courses/${courseid}`);
  console.log(course.data);
  res.render("edit", { course: course.data });
};

exports.updateCourse = async (req, res) => {
  //console.log(req.body);

  const result = await api.post(`/api/courses/update`, { ...req.body });
  console.log(result.data);
  res.render("update", { course: result.data });
};
