import React from "react";

const Student = ({
  student_id,
  index,
  name,
  campus,
  cohort,
  deleteStudent
}) => {
  return (
    <div
      style={index % 2 === 0 ? { backgroundColor: "#dddddd" } : null}
      className="student"
    >
      <div>{name}</div>
      <div>{cohort}</div>
      <div>{campus}</div>
      <button onClick={() => deleteStudent(student_id)}>Delete</button>
    </div>
  );
};

export default Student;
