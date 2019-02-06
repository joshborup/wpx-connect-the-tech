import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <div>
            <h1>DevMountain</h1>
            <h2>Student Dashboard</h2>
          </div>
          <nav>
            <NavLink exact to="/" activeClassName="active">
              Student Info
            </NavLink>
            <NavLink to="/campus_info" activeClassName="active">
              Campus Info
            </NavLink>
          </nav>
        </div>
      </header>
    );
  }
}
