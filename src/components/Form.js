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
    // write a post method that will post the results of the form to the server at path /api/student
  };

  render() {
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

          {/* write the select tag and option tags */}
        </div>

        <button onClick={this.postStudent}>Submit</button>
        <div className="message">{this.state.message}</div>
      </form>
    );
  }
}
