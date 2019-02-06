import React, { Component } from "react";
import Header from "./components/Header";
import StudentInfo from "./components/StudentInfo";
import CampusInfo from "./components/CampusInfo";
import { Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/campus_info" component={CampusInfo} />
        <Route exact path="/" component={StudentInfo} />
      </div>
    );
  }
}

export default App;
