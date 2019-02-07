import React, { Component } from "react";
import axios from "axios";
import Form from "./Form";
import Student from "./Student";
import ColumnLabels from "./ColumLabels";
import { setStudents, deleteStudent } from "../ducks/reducer";
import { connect } from "react-redux";

class Home extends Component {
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
      this.props.setStudents(response.data);
    });
  };

  deleteStudent = id => {
    axios.delete(`/api/student/${id}`).then(response => {
      this.props.deleteStudent(response.data);
    });
  };

  render() {
    const { studentList } = this.props;
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
            <Form getStudents={this.props.getStudents} />
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

const mapStateToProps = stateFromReducer => {
  return {
    studentList: stateFromReducer.studentList
  };
};

const mapDispatchToProps = {
  setStudents: setStudents,
  deleteStudent: deleteStudent
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
