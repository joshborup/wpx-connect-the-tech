module.exports = {
  getStudents: (req, res) => {
    const db = req.app.get("db");
    db.get_students()
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => console.log(err));
  },
  postStudent: (req, res) => {
    const db = req.app.get("db");
    const { name, cohort, campus } = req.body;
    db.post_student([name, cohort, campus])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        console.log(err);
        res
          .status(300)
          .json({ message: "there was an error posting to the server" });
      });
  },
  updateStudent: (req, res) => {
    const db = req.app.get("db");
    const { student_id, cohort } = req.params;
    console.log(student_id, cohort);
    db.update_student([student_id, cohort])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => console.log(err.detail));
  },
  deleteStudent: (req, res) => {
    const db = req.app.get("db");
    const { student_id } = req.params;
    console.log("first", student_id);
    db.delete_student(student_id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => console.log("first", err));
  }
};
