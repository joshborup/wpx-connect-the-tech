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
    this.getStudents();
  }

  getStudents = () => {
    axios.get("/api/students").then(response => {
      this.setState({
        studentList: response.data
      });
    });
  };

  deleteStudent = id => {
    axios.delete(`/api/student/${id}`).then(response => {
      console.log(response);
      this.setState({
        studentList: response.data
      });
    });
  };

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
