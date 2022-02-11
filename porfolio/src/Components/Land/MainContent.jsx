import React from "react";
import { motion } from "framer-motion";

import TitleText from "../TitleText";

import WebDevelopmentIMG from "../../Img/webDevelopment.svg";
import downArrowIMG from "../../Img/arrow-down-solid.png";

const MainContent = () => {
  return (
    <>
      <motion.div
        id="main-content"
        className="flex mt-20"
        initial={{ opacity: 0, translateX: 100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1.3 }}
      >
        <div className={"w-3/4 flex mx-auto"}>
          <motion.img
            drag
            dragConstraints={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            src={WebDevelopmentIMG}
            className="w-3/6 h-auto mb-10 bg-no-repeat rounded-full bg-bubble"
          />
          <div id="main-text" className="w-2/3 mt-20 ml-20">
            <TitleText
              title={"              Web developer & Multimedia Specialist"}
            />

            <p className="w-2/3 pt-5 pb-5 pl-5 mx-auto text-2xl text-center text-gray-400 border-t border-gray-200 mt-36 pm-5 ">
              I'm Galha, glad to meet you. Welcome to my little section of the
              internet!
            </p>
          </div>
        </div>
      </motion.div>
      <img src={downArrowIMG} className="mx-auto w-7 animate-bounce" alt="" />
    </>
  );
};

// static	position: static;
// fixed	position: fixed;
// absolute	position: absolute;
// relative	position: relative;
// sticky

export default MainContent;
