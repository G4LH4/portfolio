import React, { useEffect, useState } from "react";

import Tip from "../Tip";
import Header from "../Land/Header";
import LandPage from "./LandPage";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import Bottom from "./Bottom";

const MainPage = () => {
  return (
    <div id="main-page">
      <Tip />
      <Header />
      <LandPage />
      <AboutPage />
      <ProjectsPage />
      <Bottom />
    </div>
  );
};

export default MainPage;
