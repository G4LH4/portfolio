import React from "react";
import aboutMeIMG from "../../Img/aboutMe.svg";
import { motion } from "framer-motion";

const CardProjects = () => {
  return (
    <div id="cards" className="flex ">
      <Card
        projectIMG={aboutMeIMG}
        title={"formatted-time"}
        link={"https://github.com/G4LH4/library-formattedTime"}
      />
      <Card
        projectIMG={aboutMeIMG}
        title={"galhaphy"}
        link={"https://github.com/G4LH4/galhaphy"}
      />

      <Card projectIMG={aboutMeIMG} title={"formatted-time"} />
    </div>
  );
};

const Card = ({ projectIMG, title, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className="w-1/4 mx-auto mt-20 border rounded-xl"
    >
      <h4 className="p-2 text-2xl text-white border-b ">{title}</h4>

      <motion.img
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        src={projectIMG}
        className="w-4/6 pb-10 mx-auto mt-10"
      />

      <div className="border-t">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-10 mt-5 mb-5 text-xl text-white rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 "
          onClick={() => {
            window.location = link;
          }}
        >
          Go to site
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CardProjects;
