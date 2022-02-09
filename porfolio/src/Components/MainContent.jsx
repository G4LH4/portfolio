import React from "react";
import { motion } from "framer-motion";

import WebDevelopmentIMG from "../Img/webDevelopment.png";

const MainContent = () => {
  return (
    <motion.div
      id="main-content"
      className="mt-20 flex"
      initial={{ opacity: 0, translateX: 100 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1.3 }}
    >
      <img
        src={WebDevelopmentIMG}
        className="w-2/5 ml-20 mb-10 bg-gradient-to-r from-violet-500 to-fuchsia-500  rounded-full"
      />
      <div id="main-text" className="ml-20 mt-20 w-2/3">
        <h1 className="text-7xl text-transparent  pt-5 pb-5 pl-5 pm-5  bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
          Web developer, Web artist
        </h1>

        <p className="text-xl w-2/3 mx-auto  mt-36 text-gray-400  border-t border-gray-200 pt-5 pb-5 pl-5 pm-5 ">
          Im Galha, glad to met you. Welcome to my little section of the
          internet!
        </p>
      </div>
    </motion.div>
  );
};

export default MainContent;
