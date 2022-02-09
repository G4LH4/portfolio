import React from "react";

import WebDevelopmentIMG from "../Img/webDevelopment.png";

const MainContent = () => {
  return (
    <div id="main-content" className="mt-20 flex">
      <img
        src={WebDevelopmentIMG}
        className="w-2/5 ml-20 mb-10 bg-gradient-to-r from-violet-500 to-fuchsia-500  rounded-full"
      />

      <div id="main-text" className="ml-40 mt-14 w-1/3 ">
        <h1 className="text-6xl text-transparent  border-2 pt-5 pb-5 pl-5 pm-5  bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
          Web developer, Web artist
        </h1>

        <p className="text-xl mt-20 text-gray-400  border-2 pt-5 pb-5 pl-5 pm-5 ">
          Im Galha, glad to met you Welcome to my little section of the
          internet!
        </p>
      </div>
    </div>
  );
};

export default MainContent;
