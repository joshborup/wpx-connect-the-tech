module.exports = {
  getStudents: (req, res) => {
    //    logic to access db, run the query in get_students.sql
    //    send info back to the person who requested it
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
    //    logic to access db, run the query in delete_student.sql (hint: make sure to pass in the param student_id, check the delete route url)
    //    send some sort of response to confirm deletion, should generally be updated list
  }
};
