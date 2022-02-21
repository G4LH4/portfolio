import React from "react";
import { motion } from "framer-motion";

import MotionIMG from "../MotionIMG";
import aboutMeIMG from "../../Img/aboutMe.svg";

import TitleText from "../TitleText";

const MainText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -100 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1.3 }}
      id="main-text"
      className="flex w-screen"
    >
      <div id="text" className="w-1/3 mt-20 ml-10 text-white">
        <TitleText title={"About me"} addClass={"uppercase  "} />

        <p className="mt-10 text-2xl brightness-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum at ad
          molestiae maxime cum laboriosam minus totam deserunt iure quaerat
          perferendis, a nemo architecto quo enim ab animi, quasi
          necessitatibus.
        </p>

        <p className="pt-4 mt-5 text-2xl border-t brightness-50">
          Some of the languages that i work with are:{" "}
          <SpanSkills>Javascript</SpanSkills> <SpanSkills>React</SpanSkills>{" "}
          <SpanSkills>MongoDB</SpanSkills>
          <SpanSkills>Framer motion</SpanSkills>
          <SpanSkills>Git</SpanSkills>
        </p>
      </div>

      <div className="w-5/12 ml-40 bg-secondBubble">
        <MotionIMG src={aboutMeIMG} addClass={""} />
      </div>
    </motion.div>
  );
};

const SpanSkills = ({ children, color }) => {
  return <span className="mr-3 text-purple-400">{children}</span>;
};

export default MainText;
