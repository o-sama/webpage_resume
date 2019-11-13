import React from "react";
import * as exp from "./exp";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ExperienceInfo from "./ExperienceInfo";

const ExperienceList = () => (
  <Tabs className="th">
    <TabList>
      <Tab>Thomson Reuters</Tab>
      <Tab>Flipp</Tab>
      <Tab>London Hydro</Tab>
      <Tab>TMMC</Tab>
    </TabList>

    <TabPanel>
      <ExperienceInfo
        position="Software Developer (Cloud)"
        dates="September 2019 - December 2019"
      />
      <br></br>
      {exp.tr}
    </TabPanel>
    <TabPanel>
      <ExperienceInfo
        position="Software Engineering Intern"
        dates="January 2019 - April 2019"
      />
      {exp.flipp}
    </TabPanel>
    <TabPanel>
      <ExperienceInfo
        position="IT Student Intern"
        dates="September 2017 - December 2017"
      />
      {exp.hydro}
    </TabPanel>
    <TabPanel>
      <ExperienceInfo
        position="IS Sys Eng Specialist"
        dates="May 2016 - September 2016 & January 2017 - April 2017"
      />
      {exp.tmmc}
    </TabPanel>
  </Tabs>
);

export default ExperienceList;
