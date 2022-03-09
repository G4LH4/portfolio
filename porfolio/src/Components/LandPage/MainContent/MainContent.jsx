import { Link } from "wouter";

// Profile img
import profileIMG from "../../../IMG/profileIMG.png";

const MainContent = () => {
  return (
    <div id="main-content" className="mt-20">
      <div className="flex">
        <div id="text" className="w-full p-20 ">
          <div id="main-text" className="pb-10 border-b">
            <h1 className="tracking-wide text-8xl">Hello, im Galha</h1>
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
        </div>

        <div className="">
          <img
            src={profileIMG}
            className="float-right w-2/3 mr-10 bg-red-300 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
