const express = require("express");
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const adminAuthentication = (req,res,next) => {

    const { username,password } = req.headers;
    const admin = ADMINS.find(a => a.username === username && a.password === password); 
   
    if(admin) {
        next();
    } else {
        res.status(403).json ({message : "Admin Auth failed"})
    }

}
const UserAuthentication = (req,res,next) => {

    const { username , password } = req.headers;
    const user = USERS.find(a => a.username === username && a.password === password);
    
    if(user) {
        next();
    } else {
        res.status(403).json ({message : "Admin Auth failed"})
    }

}

// Admin routes
app.post("/admin/signup", (req, res) => {
  // logic to sign up admin
  const admin = req.body;
  const existingAdmin = ADMINS.find(a => a.username === admin.username);

  if(existingAdmin) {
    res.status(403).json ({message : 'Admin already exists'});
  } else { 
    ADMINS.push(admin);
    res.json ({
        message : 'Admin Created succesfully'
    })
  } }
  );

app.post("/admin/login", adminAuthentication,(req, res) => {
  // logic to log in admin
  res.json ({message : "Admin Login succesful"})
});

app.post("/admin/courses",adminAuthentication, (req, res) => {
  // logic to create a course
    const course = req.body;
    if(!course.title) {
        return res.json(411).send({message : "Please send me the title"});
    }
    course.id = Date.now();
    COURSES.push(course) ;
    res.json({message : "Course Created Succesfully", courseID : course.id})
   
});

app.put("/admin/courses/:courseId", adminAuthentication, (req, res) => {
  // logic to edit a course 
    const courseId = parseInt(res,params.courseId);
    const course = COURSES.find(c => c.id === courseId);

    if(course) {
        Object.assign(course ,req.body);
        res.json({ message : "Course Updated succesfully"});

    }else { 
        res.status(404).json({message : "Course not Found"});
    }

});

app.get("/admin/courses", (req, res) => {

  // logic to get all courses
});

// User routes
app.post("/users/signup", (req, res) => {
  // logic to sign up user
  const user = req.body;
  const existingUser = USERS.find(a => a.username === user.username);

  if(existingUser) {
    res.status(403).json ({message : 'User already exists'});
  } else { 
    USERS.push(user);
    res.json ({
        message : 'Admin Created succesfully'
    })
  } }

app.post("/users/login", UserAuthentication (req, res) => {
  // logic to log in user
   res.json ({message : "Admin Login succesful"})
});

app.get("/users/courses", (req, res) => {
  // logic to list all courses
});

app.post("/users/courses/:courseId", (req, res) => {
  // logic to purchase a course
});

app.get("/users/purchasedCourses", (req, res) => {
  // logic to view purchased courses
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
