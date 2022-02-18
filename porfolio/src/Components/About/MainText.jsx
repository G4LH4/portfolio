import React from "react";
import { motion } from "framer-motion";

import TitleText from "../TitleText";

const MainText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -100 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1.3 }}
      id="main-text"
      className="left-0 w-3/5 "
    >
      <div id="container" className={'ml-5'}>
        <div id="text">
          <TitleText addClass={"animate-bounce float-left"} title={"About me"} />

          <p className="w-3/4 pt-5 pb-5 pl-5 pr-5 float-left mt-20 text-2xl text-left text-gray-500 border rounded-xl">
            My name is Tomas, i&apos;m 16 y/o. Started in this world of
            programming 2 years ago whit html and css. In 2021 I started
            learning Javascript and the journey never stopped :D (Obviously a
            coffee lover )
          </p>
        </div>

        {/* Skills */}

        <div id="skills" className="w-4/6 float-left mt-20">
          <div className="p-5 mr-5 font-mono text-left text-gray-500 border rounded ">
            <PSkills addClass={" w-11/12"} title={"HTML"} />
            <PSkills addClass={" w-10/12"} title={"CSS"} />
            <PSkills addClass={" w-5/12"} title={"Framer motion"} />
            <PSkills addClass={" w-11/12"} title={"Javascript"} />
            <PSkills addClass={" w-9/12"} title={"React"} />
            <PSkills addClass={" w-7/12"} title={"MongoDB"} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PSkills = ({ title, addClass }) => {
  return (
    <>
      <p className={`${addClass} border p-1 mb-5 rounded-xl`}>{title}</p>
    </>
  );
};

export default MainText;
