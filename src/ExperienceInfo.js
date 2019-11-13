import React from "react";

const ExperienceInfo = props => {
  return (
    <div className="info">
      <span>
        <h2
          className="header"
          style={{ textAlign: "center", verticalAlign: "middle" }}
        >
          {props.position}
        </h2>
      </span>
      <div
        className="metadate"
        style={{ marginTop: "15px", textAlign: "center" }}
      >
        <div className="date">{props.dates}</div>
      </div>
    </div>
  );
};

export default ExperienceInfo;
