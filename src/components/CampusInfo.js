import React, { Component } from "react";
import Campus from "./Campus";
import ColumnLabels from "./ColumLabels";
import axios from "axios";

export default class CampusInfo extends Component {
  constructor() {
    super();
    this.state = {
      campusInfo: []
    };
  }
  componentDidMount() {
    axios.get("/api/campus_info").then(response => {
      this.setState({
        campusInfo: response.data
      });
    });
  }

  render() {
    const { campusInfo } = this.state;
    console.log(campusInfo);
    const mappedCampusInfo = campusInfo.map((campus, index) => {
      return <Campus index={index} key={campus.campus_id} {...campus} />;
    });
    return (
      <div className="campus-info-container">
        <div>Campus Info</div>

        <div>
          <ColumnLabels
            first="campus"
            second="program"
            third="phone"
            fourth=""
          />
          {mappedCampusInfo}
        </div>
      </div>
    );
  }
}
