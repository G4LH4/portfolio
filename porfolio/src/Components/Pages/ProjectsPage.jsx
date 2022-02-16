import React from "react";

import TitleText from "../TitleText";
import CardProjects from "../Projects/CardProjects";

const ProjectsPage = () => {
  return (
    <div id="projects-page">
      <div className="mt-15">
        <TitleText title={"Last projects"} />
        <CardProjects />
      </div>
    </div>
  );
};

export default ProjectsPage;
