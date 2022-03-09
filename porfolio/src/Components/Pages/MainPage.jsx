// wouter
import { Route } from "wouter";

// motion
import { motion } from "framer-motion";

// NavBar
import NavBar from "../NavBar/NavBar";

// Pages
import LandPage from "./LandPage";
import AboutPage from "./AboutPage";

const MainPage = () => {
  return (
    <motion.div
      id="main-page"
      className="w-11/12 p-10 mx-auto mt-5 text-white bg-black rounded-xl"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <NavBar />

      <Route path="/">
        <LandPage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
    </motion.div>
  );
};

export default MainPage;
