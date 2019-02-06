import React, { Component } from "react";
import axios from "axios";
import Form from "./Form";
import Student from "./Student";
import ColumnLabels from "./ColumLabels";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: []
    };
  }

  componentDidMount() {
    // write the getStudents function that get invoked when componentDidMount runs (hint: route "/api/students")
    this.getStudents();
  }

  // write a delete method that will take in an id and send it to /api/student/:student_id (hint: student id is the param)
  // set state to the studentList with the response sent back

  render() {
    const { studentList } = this.state;
    console.log(studentList);
    const mappedStudents = studentList.map((student, index) => {
      return (
        <Student
          key={student.student_id}
          {...student}
          index={index}
          deleteStudent={this.deleteStudent}
        />
      );
    });
    return (
      <div className="student-info-container">
        <div>
          <div>
            <Form getStudents={this.getStudents} />
          </div>
          <div className="student-container">
            <ColumnLabels />
            {mappedStudents}
          </div>
        </div>
      </div>
    );
  }
}
