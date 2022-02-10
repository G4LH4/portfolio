import React from "react";

import MainText from "../About/MainText";
import aboutMeIMG from "../../Img/aboutMe.svg";

const AboutPage = () => {
  return (
    <div id="about">
      <div id="content" className="flex mt-20">
        {/* About title */}
        <MainText />

        <div id="img" className="float-right  ml-auto  w-2/5">
          <img src={aboutMeIMG} className="w-4/5 mx-auto bg-bubble2" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
