import { Link } from "wouter";

// Motion
import { motion } from "framer-motion";
// Profile img
import profileIMG from "../../../IMG/profileIMG.png";

const MainContent = () => {
  return (
    <div id="main-content" className="mt-auto">
      <div className="flex mt-10">
        <motion.div
          id="text"
          className="w-full p-20"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div id="main-text" className="pb-10 border-b">
            <h1 className="tracking-wide text-8xl">
              Hello<span className="text-red-300 animate-pulse">,</span> <br />
              im <br />
              Galha
            </h1>
          </div>
          <p className="mt-10 brightness-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quae
            enim officia.
          </p>

          <div className="mt-12">
            <a
              href="mailto:totogalha@gmail.com"
              className="p-2 text-black bg-red-200"
            >
              Contact me
            </a>

            <Link href="/about">
              <a className="ml-20">About me</a>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={profileIMG}
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
    </div>
  );
};

export default MainContent;
