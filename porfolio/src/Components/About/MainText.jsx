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
      className="flex float-left w-1/3 ml-20"
    >
      <div id="main-text">
        <TitleText title={"About me"} />

        <p className="w-3/4 pt-5 pb-5 pl-5 pr-5 mx-auto mt-20 text-2xl text-left text-gray-400 border rounded-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure enim
          consectetur quaerat assumenda neque explicabo, natus alias
          exercitationem aut ad a sunt, non repellendus eveniet, adipisci eos
          praesentium rem. Ratione.
        </p>
      </div>
    </motion.div>
  );
};

export default MainText;
