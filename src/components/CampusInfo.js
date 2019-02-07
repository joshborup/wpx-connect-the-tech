import React, { Component } from "react";
import Campus from "./Campus";
import ColumnLabels from "./ColumLabels";
import { setCampus } from "../ducks/reducer";
import { connect } from "react-redux";
import axios from "axios";

class CampusInfo extends Component {
  constructor() {
    super();
    this.state = {
      campusInfo: []
    };
  }
  componentDidMount() {
    axios.get("/api/campus_info").then(response => {
      this.props.setCampus(response.data);
    });
  }

  render() {
    const { campusInfo } = this.props;
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

const mapStateToProps = stateFromReducer => {
  return {
    campusInfo: stateFromReducer.campusInfo
  };
};

const mapDispatchToProps = {
  setCampus: setCampus
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampusInfo);
