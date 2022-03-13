import { motion } from "framer-motion";

import AboutMeIMG from "../../IMG/aboutMeIMG.png";

const AboutContent = () => {
  return (
    <div id="about-content" className="flex justify-between">
      <motion.div
        className="w-full p-20"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div id="main-text" className="pb-10 border-b">
          <h1 className="tracking-wide text-8xl">
            About <span className="text-red-200">me</span>
          </h1>
        </div>
        <p className="mt-10 brightness-75">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quae
          enim officia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ratione in sequi dolor unde qui reprehenderit tempore, ut dicta
          cupiditate porro beatae ad molestiae illum debitis! Perspiciatis
          magnam labore tempore quod.
        </p>
        <p className="mt-10 brightness-75">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto,
          deleniti impedit, voluptatem doloribus quas eligendi inventore, itaque
          maiores beatae rem tenetur assumenda animi dolor nam ut at maxime!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={AboutMeIMG}
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          className="mx-auto bg-red-300 bg-no-repeat border-4 rounded-full g-center 2xl:w-9/12"
        />
      </motion.div>
    </div>
  );
};

export default AboutContent;
