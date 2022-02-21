import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import formattedTimeIMG from "../../Img/formatted-time.png";
import librarianIMG from "../../Img/librarian.png";
import MotionIMG from "../MotionIMG";

import fetchapi from "../../Services/fetchApi";

const CardProjects = () => {
  const [gif, setGif] = useState();

  useEffect(() => {
    (async () => {
      const data = await fetchapi();
      setGif(data);
    })();
  }, []);

  return (
    <div id="cards" className="flex">
      <Card
        projectIMG={formattedTimeIMG}
        title={"formatted-time"}
        link={"https://github.com/G4LH4/library-formattedTime"}
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum suscipit, sequi officiis at quasi eveniet minima perspiciatis, quos natus sunt sed reprehenderit tempore iure delectus officia est placeat? Incidunt, architecto!"
        }
      />
      <Card
        projectIMG={gif}
        child={"(random gif)"}
        title={"galhaphyi"}
        link={"https://github.com/G4LH4/galhaphy"}
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum suscipit, sequi officiis at quasi eveniet minima perspiciatis, quos natus sunt sed reprehenderit tempore iure delectus officia est placeat? Incidunt, architecto!"
        }
      />

      <Card
        projectIMG={librarianIMG}
        title={"formatted-time"}
        link={"https://github.com/G4LH4/LibrarianBot"}
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum suscipit, sequi officiis at quasi eveniet minima perspiciatis, quos natus sunt sed reprehenderit tempore iure delectus officia est placeat? Incidunt, architecto!"
        }
      />
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Card = ({ projectIMG, title, link, text, child }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className={` w-1/4  mt-20 border mx-auto   rounded-xl`}
    >
      <h4 className="p-2 text-2xl text-center text-white border-b opacity-50 ">
        {title}
      </h4>

      <MotionIMG src={projectIMG} addClass={"w-4/6 pb-10 mx-auto mt-10"} />

      <h3 className={"text-white opacity-50 text-center"}>{child}</h3>

      <div className="border-t">
        <h1 className="p-10 pt-10 text-left text-white border-b opacity-50">
          {text}
        </h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex px-10 mx-auto mt-5 mb-5 text-xl text-white rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 "
          onClick={() => {
            window.location = link;
          }}
        >
          See on github
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CardProjects;
