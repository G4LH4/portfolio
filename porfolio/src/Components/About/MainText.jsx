import React from "react";

const MainText = () => {
  return (
    <div id="main-text" className="float-left w-1/3 ml-20 flex">
      <div id="main-text">
        <h1 className=" text-7xl text-center mx-auto text-transparent  pt-10 pb-5 pl-5 pm-5  bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
          About me
        </h1>

        <p className=" text-2xl mt-20 mx-auto w-3/4 border pt-5 pb-5 pl-5 pr-5 rounded-xl  text-left  text-gray-400 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure enim
          consectetur quaerat assumenda neque explicabo, natus alias
          exercitationem aut ad a sunt, non repellendus eveniet, adipisci eos
          praesentium rem. Ratione.
        </p>
      </div>
    </div>
  );
};

export default MainText;
