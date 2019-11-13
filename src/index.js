import React from "react";
import ReactDOM from "react-dom";
import ExperienceCard from "./ExperienceCard";
import Projects from "./Projects";
import ExperienceList from "./ExperienceList";

// semantic-ui.com is nice for styling.

const App = () => {
  return (
    <div>
      <div
        className="ui raised very padded  container segment"
        style={{ width: "60%" }}
      >
        <div className="ui centered card">
          <div className="image">
            <img src={require("./profile_pic.png")} />
            <div
              className="content"
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
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
