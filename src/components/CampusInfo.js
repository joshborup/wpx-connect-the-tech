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
    // axios call to get "/api/campus_info" and set state with response
  }

  render() {
    const { campusInfo } = this.state;

    // map over campusInfo and pass campus info as props
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
          {/* diplay mapped campus list */}
        </div>
      </div>
    );
  }
}
