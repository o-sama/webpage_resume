import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import * as exp from "./exp";

const Projects = () => (
  <Tabs>
    <TabList>
      <Tab>Vigilant</Tab>
      <Tab>Kirsch</Tab>
    </TabList>

    <TabPanel>{exp.vigilant}</TabPanel>
    <TabPanel>exp.kirsh}</TabPanel>
  </Tabs>
);

export default Projects;
