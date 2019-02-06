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
app.route("/api/campus_info").get(campusController.readCampusData);

// student routes
app.get("/api/students", studentController.getStudents);
app.post("/api/student", studentController.postStudent);
app.put("/api/student/:student_id/:cohort", studentController.updateStudent);
app.delete("/api/student/:student_id", studentController.deleteStudent);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
