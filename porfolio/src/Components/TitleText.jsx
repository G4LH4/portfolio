import React from "react";

const TitleText = ({ title, addClass }) => {
  return (
    <>
      <h1
        className={`${addClass} mx-auto text-transparent text-6xl  bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500`}
      >
        {title}
      </h1>
    </>
  );
};

export default TitleText;
