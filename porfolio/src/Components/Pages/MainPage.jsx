// wouter
import { Route } from "wouter";

// NavBar
import NavBar from "../NavBar/NavBar";

// Pages
import LandPage from "./LandPage";
import AboutPage from "./AboutPage";

const MainPage = () => {
  return (
    <div
      id="main-page"
      className="w-11/12 p-10 mx-auto mt-5 text-white bg-black rounded-xl"
    >
      <NavBar />

      <Route path="/">
        <LandPage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
    </div>
  );
};

export default MainPage;
