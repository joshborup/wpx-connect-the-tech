import React, { Component } from "react";
import axios from "axios";
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      cohort: "",
      campus: "",
      message: ""
    };
  }
  postStudent = event => {
    event.preventDefault();
    const { name, cohort, campus } = this.state;
    const newStudent = {
      name,
      cohort,
      campus
    };
    axios
      .post("/api/student", newStudent)
      .then(response => {
        this.setState({
          name: "",
          cohort: "",
          campus: "",
          message: response.data.message
        });
        this.props.getStudents();
      })
      .catch(err => {
        console.log(err);
        this.setState({
          message: "there was an error posting, please try again"
        });
      });
  };
  render() {
    console.log(this.state.campus);
    return (
      <form>
        <div>
          <label htmlFor="#name">Name: </label>
          <input
            placeholder="name"
            id="name"
            onChange={e => this.setState({ name: e.target.value })}
            value={this.state.name}
          />
        </div>

        <div>
          <label htmlFor="#cohort">Cohort: </label>
          <input
            placeholder="cohort"
            id="cohort"
            onChange={e => this.setState({ cohort: e.target.value })}
            value={this.state.cohort}
          />
        </div>

        <div>
          <label htmlFor="#campus">Campus: </label>
          <select
            placeholder="campus"
            id="campus"
            onChange={e => this.setState({ campus: e.target.value })}
            value={this.state.campus}
          >
            <option value="" defaultValue>
              select one
            </option>
            <option value="1">Phoenix</option>
            <option value="2">Provo</option>
            <option value="3">Dallas</option>
          </select>
        </div>

        <button onClick={this.postStudent}>Submit</button>
        <div className="message">{this.state.message}</div>
      </form>
    );
  }
}
