import React from "react";
import { motion } from "framer-motion";

const MotionIMG = ({ src, addClass }) => {
  return (
    <>
      <motion.img
        initial={{ opacity: 0, translateX: 10 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.3 }}
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        src={src}
        className={addClass}
      />
    </>
  );
};

export default MotionIMG;
