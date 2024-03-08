const express = require("express");
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const adminAuthentication = (req, res, next) => {
  const { username, password } = req.headers;
  const admin = ADMINS.find(
    (a) => a.username === username && a.password === password
  );

  if (admin) {
    next();
  } else {
    res.status(403).json({ message: "Admin Auth failed" });
  }
};
const UserAuthentication = (req, res, next) => {
  const { username, password } = req.headers;
  const user = USERS.find(
    (a) => a.username === username && a.password === password
  );

  if (user) {
    req.user = user; //Add user object to the request
    next();
  } else {
    res.status(403).json({ message: "Admin Auth failed" });
  }
};

// Admin routes
app.post("/admin/signup", (req, res) => {
  // logic to sign up admin
  const admin = req.body;
  const existingAdmin = ADMINS.find((a) => a.username === admin.username);

  if (existingAdmin) {
    res.status(403).json({ message: "Admin already exists" });
  } else {
    ADMINS.push(admin);
    res.json({
      message: "Admin Created succesfully",
    });
  }
});

app.post("/admin/login", adminAuthentication, (req, res) => {
  // logic to log in admin
  res.json({ message: "Admin Login succesful" });
});

app.post("/admin/courses", adminAuthentication, (req, res) => {
  // logic to create a course
  const course = req.body;
  if (!course.title) {
    return res.json(411).send({ message: "Please send me the title" });
  }
  course.id = Date.now();
  COURSES.push(course);
  res.json({ message: "Course Created Succesfully", courseID: course.id });
});

app.put("/admin/courses/:courseId", adminAuthentication, (req, res) => {
  // logic to edit a course
  const courseId = parseInt(res, params.courseId);
  const course = COURSES.find((c) => c.id === courseId);

  if (course) {
    // course.title = req.body.title;
    Object.assign(course, req.body);
    res.json({ message: "Course Updated succesfully" });
  } else {
    res.status(404).json({ message: "Course not Found" });
  }
});

app.get("/admin/courses", (req, res) => {
  // logic to get all courses
  res.json;
  ({ course: COURSES });
});

// User routes
app.post("/users/signup", (req, res) => {
  // logic to sign up user
  const user = { ...req.body, purchasedCourses: [] };
  USERS.push(user);
  res.json({
    message: "User Created succesfully",
  });
});

app.post("/users/login", UserAuthentication, (req, res) => {
  // logic to log in user
  res.json({ message: "Admin Login succesful" });
});

app.get("/users/courses", UserAuthentication, (req, res) => {
  res.json({ courses: COURSES.filter((c) => c.published) }); // logic to list all courses
});

app.post("/users/courses/:courseId", UserAuthentication ,(req, res) => {
  // logic to purchase a course
  const courseId = Number(req.params.courseId);
  const course = COURSES.find((c) => c.id === courseId && c.published);
  if (course) {
    req.user.purchasedCourses.push(courseId);
    res.json({message : "Course Purchased Successfully"});
   }else {
    res.status(404).json({  message : "Course not found or unavailable" });
   }
});

app.get("/users/purchasedCourses", (req, res) => {
  // logic to view purchased courses
  // const purchasedCourses = COURSES.find(c => req.user.purchasedCourses.include(c.id));
  var user = req.user.purchasedCourses; [1,4];   
  var purchasedCourses = [];
  for(let i=0 ; i<COURSES.length ; i++){
    if(purchasedCoursesIds.IndexOf(COURSES[i].id) != -1) {
      purchasedCourses.push(COURSES[i]);
    }
  }
  res.json({course : purchasedCourses});

});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
