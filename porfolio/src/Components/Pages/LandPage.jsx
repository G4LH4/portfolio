import React from "react";

import Header from "../Header";
import MainContent from "../MainContent";

const LandPage = () => {
  return (
    <div className="bg-black mt-32  w-3/4 mx-auto text-white">
      {/*  Header */}
      <Header />
      {/* Main content */}
      <MainContent />
    </div>
  );
};

export default LandPage;
