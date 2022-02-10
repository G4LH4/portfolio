import React from "react";
import { motion } from "framer-motion";

import Header from "../Land/Header";
import MainContent from "../Land/MainContent";

const LandPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -50 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1.3 }}
      className="bg-black h-screen  border-b w-full  mx-auto text-white  "
    >
      {/*  Header */}
      <Header />
      {/* Main content */}
      <MainContent />
    </motion.div>
  );
};

export default LandPage;
