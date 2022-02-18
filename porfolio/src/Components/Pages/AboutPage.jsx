import React from "react";
import { motion } from "framer-motion";

import MotionIMG from "../MotionIMG";
import MainText from "../About/MainText";
import aboutMeIMG from "../../Img/aboutMe.svg";

const AboutPage = () => {
  return (
    <div id="about" className="pb-10 border-b">
      <div id="content" className="flex mt-20">
        {/* About title */}
        <MainText />

          <MotionIMG src={aboutMeIMG} addClass={"mx-auto w-2/6 bg-no-repeat mt-20 bg-bubble2"} />
      </div>
    </div>
  );
};

export default AboutPage;
