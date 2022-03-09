import { Link } from "wouter";

// Motion
import { motion } from "framer-motion";
// Profile img
import profileIMG from "../../../IMG/profileIMG.png";

const MainContent = () => {
  return (
    <div id="main-content" className="mt-20">
      <div className="flex">
        <motion.div
          id="text"
          className="w-full p-20"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div id="main-text" className="pb-10 border-b">
            <h1 className="tracking-wide text-8xl">
              Hello<span className="text-red-300">,</span> im Galha
            </h1>
          </div>
          <p className="mt-10 brightness-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quae
            enim officia.
          </p>

          <div className="mt-10">
            <Link href="/contact">
              <a>
                <a className="p-3 mr-20 text-black bg-red-200">Contact me</a>
              </a>
            </Link>

            <Link href="/about">
              <a>About me</a>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={profileIMG}
            className="float-right w-2/3 mr-10 bg-red-300 rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MainContent;
