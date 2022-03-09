import { Link } from "wouter";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <div id="nav-bar" className="flex justify-between p-5">
      <div className="flex">
        <Link href="/">
          <h1 className="text-2xl cursor-pointer">Galha |</h1>
        </Link>

        <nav className="ml-20">
          <ul className="flex">
            <Link href="/">
              <a className="mt-1 mr-10 opacity-75 hover:opacity-100">Home</a>
            </Link>

            <Link href="/about">
              <a className="mt-1 mr-10 opacity-75 hover:opacity-100">About</a>
            </Link>

            <Link href="/projects">
              <a className="mt-1 mr-10 opacity-75 hover:opacity-100">
                Projects
              </a>
            </Link>
          </ul>
        </nav>
      </div>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <a className="p-2 mr-10 border ">Contact me</a>
      </motion.div>
    </div>
  );
};

export default NavBar;
