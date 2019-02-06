import React from "react";

const ColumLabels = ({ first, second, third, fourth }) => {
  return (
    <div className="student">
      <div>{first || "Name"}</div>
      <div>{second || "Cohort"}</div>
      <div>{third || "Campus"}</div>
      <div style={fourth === "" ? { display: "none" } : null}>
        {fourth || "Delete"}
      </div>
    </div>
  );
};

export default ColumLabels;
