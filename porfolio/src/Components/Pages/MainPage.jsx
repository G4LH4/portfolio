import React from "react";

import Header from "../Land/Header";
import LandPage from "./LandPage";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";

const MainPage = () => {
  return (
    <div id="main-page">
      <Header />
      <LandPage />
      <AboutPage />
      <ProjectsPage />
    </div>
  );
};

export default MainPage;
