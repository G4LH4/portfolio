import { motion } from "framer-motion";

import laptopIMG from "../../IMG/laptopIMG.png";

const ProjectsContent = () => {
  return (
    <div id="projects-content" className="flex justify-between mt-20">
      <motion.div
        className="w-full p-20"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div id="main-text" className="pb-10 border-b border-red-200 w-fit ">
          <h1 className="tracking-wide text-8xl">Projects</h1>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={laptopIMG}
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          className="mx-auto g-center 2xl:w-10/12"
        />
      </motion.div>
    </div>
  );
};

export default ProjectsContent;
