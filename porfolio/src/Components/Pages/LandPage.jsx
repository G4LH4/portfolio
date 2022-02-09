import React from "react";
import { motion } from "framer-motion";

import Header from "../Header";
import MainContent from "../MainContent";

const LandPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -50 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1.3 }}
      className="bg-black  mt-20  w-5/6 mx-auto text-white  border  border-gray-200"
    >
      {/*  Header */}
      <Header />
      {/* Main content */}
      <MainContent />
    </motion.div>
  );
};

export default LandPage;
