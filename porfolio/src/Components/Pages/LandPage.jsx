import React from "react";
import { motion } from "framer-motion";

import MainContent from "../Land/MainContent";

const LandPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -100 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1.3 }}
      className="w-full h-screen mx-auto text-black bg-gray-300 border-b "
    >
      {/* Main content */}
      <MainContent />
    </motion.div>
  );
};

export default LandPage;
