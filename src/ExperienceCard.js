import React from "react";

const ExperienceCard = props => {
  return (
    <div className="ui fluid card" style={{ margin: "50px 0 50px" }}>
      <div className="tabs">{props.content}</div>
    </div>
  );
};

export default ExperienceCard;
