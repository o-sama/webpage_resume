import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import { curTheme } from "./index";

const ExperienceCard = props => {
  return (
    <div className="th ui fluid card" style={{ margin: "50px 0 50px" }}>
      <div className="tabs">{props.content}</div>
    </div>
  );
};

export default ExperienceCard;
