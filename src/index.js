import React, { useState } from "react";
import ReactDOM from "react-dom";
import ExperienceCard from "./ExperienceCard";
import Projects from "./Projects";
import ExperienceList from "./ExperienceList";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { useDarkMode } from "./useDarkMode";
import { GlobalStyles } from "./global";
import Toggle from "./Toggle";

// semantic-ui.com is nice for styling.
export let curTheme = "";
const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  curTheme = theme;
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div>
        <div
          className="th ui raised very padded container segment"
          style={{ width: "60%" }}
        >
          <Toggle theme={theme} toggleTheme={toggleTheme} />
          <div className="th ui centered card">
            <div className="th image">
              <img src={require("./profile_pic.png")} />
              <div
                className="th content"
                style={{ textAlign: "center", verticalAlign: "middle" }}
              >
                <h2 className="header">Osama Faqhruldin</h2>
              </div>
            </div>
          </div>
          <div
            className="links"
            style={{
              marginTop: "50px",
              textAlign: "center",
              verticalAlign: "middle"
            }}
          >
            <a href="http://www.linkedin.com/in/osamafaqhruldin">
              <img src={require("./Linkedin-Round-With-Border-32.png")} />
              LinkedIn
            </a>
            <br></br>
            <br></br>
            <a href="http://www.github.com/o-sama">
              <img src={require("./GitHub-Mark-32px.png")} />
              GitHub
            </a>
          </div>
          <div className="work experience">
            <h2 style={{ marginTop: "50px", textAlign: "center" }}>
              Work Experience
            </h2>
            <ExperienceCard content={ExperienceList()} />
          </div>
          <div className="projects" style={{ marginTop: "50px" }}>
            <h2 style={{ marginTop: "50px", textAlign: "center" }}>Projects</h2>
            <ExperienceCard content={Projects()} />
          </div>
        </div>
      </div>
      {/* <div style={{ textAlign: "center" }}>
        <span>Credits:</span>
        <br></br>
        <small>
          <b>Sun</b> icon made by{" "}
          <a href="https://www.flaticon.com/authors/smalllikeart">
            smalllikeart
          </a>{" "}
          from <a href="https://www.flaticon.com">www.flaticon.com</a>
        </small>
      </div> */}
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
