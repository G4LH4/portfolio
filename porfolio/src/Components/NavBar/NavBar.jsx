import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [location, setLocation] = useLocation();
  const [path, setPath] = useState();

  useEffect(() => {
    setPath(location);
  }, [location]);

  const Links = ({ href, children }) => {
    return (
      <Link href={href}>
        <a
          className={`mt-1 mr-10 ${
            path === href && "text-red-200"
          } hover:opacity-100`}
        >
          {children}
        </a>
      </Link>
    );
  };

  return (
    <div id="nav-bar" className="flex justify-between p-5">
      <div className="flex">
        <Link href="/">
          <h1 className="text-2xl cursor-pointer">Galha |</h1>
        </Link>

        <nav className="ml-20 ">
          <ul className="flex">
            <Links href={"/"}>Home</Links>
            <Links href={"/about"}>About</Links>
            <Links href={"/projects"}>Projects</Links>
          </ul>
        </nav>
      </div>
      <motion.div
        className="ml-auto mr-0"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a href="mailto:totogalha@gmail.com" className="p-2 mr-10 border">
          Contact me
        </a>
      </motion.div>
    </div>
  );
};

export default NavBar;
