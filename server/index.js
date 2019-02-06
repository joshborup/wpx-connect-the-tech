const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const app = express();

// controllers
const studentController = require("./controllers/studentController");
const campusController = require("./controllers/campusController");

require("dotenv").config();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
  db.init();
  console.log("connected to database");
});

// campus routes
// write a get endpoint that will point to /api/campus_info

// student routes
// write a get endpoint that will point to /api/students

app.post("/api/student", studentController.postStudent);
app.put("/api/student/:student_id/:cohort", studentController.updateStudent);

// write a delete endpoint that will point to /api/student/:student_id

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
