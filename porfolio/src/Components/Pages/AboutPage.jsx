import React from "react";

import MainText from "../About/MainText";

const AboutPage = () => {
  return (
    <div id="about" className="pb-10">
      <div id="content" className="flex mt-20">
        {/* About title */}
        <MainText />
      </div>
    </div>
  );
};

export default AboutPage;
