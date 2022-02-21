import React from "react";
import { motion } from "framer-motion";

import TitleText from "../TitleText";
import MotionIMG from "../MotionIMG";

import WebDevelopmentIMG from "../../Img/webDevelopment.svg";

const MainContent = () => {
  return (
    <>
      <motion.div
        id="main-content"
        className="flex w-11/12 pt-12 "
        initial={{ opacity: 0, translateX: 100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1.3 }}
      >
        <div className={"w-auto  flex mx-auto"}>
          <MotionIMG
            src={WebDevelopmentIMG}
            addClass={"w-5/12 h-auto mr-0 bg-no-repeat bg-bubble mt-10"}
          />

          <motion.div
            initial={{ opacity: 0, translateY: -50 }}
            whileInView={{ opacity: 1, translateY: 50, translateX: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.3 }}
            id="main-text"
            className="w-2/3 mt-28"
          >
            <TitleText
              addClass={"animate-pulse text-6xl mt-10  text-center "}
              title={"Web developer & Multimedia Specialist"}
            />

            <motion.p
              initial={{ opacity: 0, translateY: -50 }}
              whileInView={{ opacity: 1, translateY: 50, translateX: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.3 }}
              className="w-1/3 pt-5 pb-5 pl-5 mx-auto mt-24 text-2xl text-left text-white border-t border-gray-200 brightness-50 pm-5 "
            >
              I&apos;m Galha, glad to meet you. Welcome to my little section of
              the internet!
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default MainContent;
