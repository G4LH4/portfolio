import React from "react";
import { motion } from "framer-motion";
import githubIMG from "../../Img/github-logo.svg";

const Header = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, translateX: -50 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1.3 }}
      className="bg-bgColor sticky top-0 z-50 px-2 sm:px-4 py-2.5"
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto ">
        <a href="#" className="flex ">
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
            GALHA
          </span>
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto " id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <MotionLI title={"About"} goto={"#about"} />
            <MotionLI title={"Projects"} goto={"#projects-page"} />

            {/* Contact li */}
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href="https://github.com/G4LH4">
                <img src={githubIMG} className={"w-fit h-8 rounded mx-auto "} />
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

// eslint-disable-next-line react/prop-types
const MotionLI = ({ title, goto }) => {
  return (
    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <a
        href={goto}
        className="block py-2 pl-3 pr-4 text-xl text-white-700 hover:bg-purple-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
      >
        {title}
      </a>
    </motion.li>
  );
};
export default Header;
