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

        <motion.div
          initial={{ opacity: 0, translateX: 100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.3 }}
          id="img"
          className="float-right w-2/5 ml-auto"
        >
          <MotionIMG src={aboutMeIMG} addClass={"mx-auto bg-bubble2"} />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
