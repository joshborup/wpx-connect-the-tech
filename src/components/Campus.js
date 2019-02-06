import React from "react";

const Campus = ({ index, campus_id, campus, program, campus_phone }) => {
  return (
    <div
      style={index % 2 === 0 ? { backgroundColor: "#dddddd" } : null}
      className="campus"
    >
      <div>{campus}</div>
      <div>{program}</div>
      <div>{campus_phone}</div>
    </div>
  );
};

export default Campus;
