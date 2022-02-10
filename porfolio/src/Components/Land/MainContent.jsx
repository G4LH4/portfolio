import React from "react";
import { motion } from "framer-motion";

import WebDevelopmentIMG from "../../Img/webDevelopment.svg";
import downArrowIMG from "../../Img/arrow-down-solid.png";

const MainContent = () => {
  return (
    <>
      <motion.div
        id="main-content"
        className="mt-20 flex"
        initial={{ opacity: 0, translateX: 100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1.3 }}
      >
        <div className={" w-2/3 flex mx-auto"}>
          <img
            src={WebDevelopmentIMG}
            className="w-3/6 h-auto  mb-10 bg-bubble  rounded-full"
          />
          <div id="main-text" className="ml-20  mt-20 w-2/3">
            <h1 className="text-7xl mx-auto text-transparent  pt-10 pb-5 pl-5 pm-5  bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Web developer & Multimedia Specialist
            </h1>

            <p className="text-2xl text-center w-2/3 mx-auto  mt-36 text-gray-400  border-t border-gray-200 pt-5 pb-5 pl-5 pm-5 ">
              I'm Galha, glad to meet you. Welcome to my little section of the
              internet!
            </p>
          </div>
        </div>
      </motion.div>
      <img
        src={downArrowIMG}
        className=" w-7 mx-auto mt-20 animate-bounce"
        alt=""
      />
    </>
  );
};

// static	position: static;
// fixed	position: fixed;
// absolute	position: absolute;
// relative	position: relative;
// sticky

export default MainContent;
