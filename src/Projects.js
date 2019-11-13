import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import * as exp from "./exp";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import { curTheme } from "./index";

const Projects = () => (
  <ThemeProvider theme={curTheme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
    <Tabs>
      <TabList>
        <Tab>Vigilant</Tab>
        <Tab>Kirsch</Tab>
      </TabList>

      <TabPanel>{exp.vigilant}</TabPanel>
      <TabPanel>{exp.kirsh}</TabPanel>
    </Tabs>
  </ThemeProvider>
);

export default Projects;

{
  /* <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
    </ThemeProvider> */
}
