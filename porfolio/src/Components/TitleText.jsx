import React from "react";

const TitleText = ({ title, addClass }) => {
  return (
    <>
      <h1
        className={
          !addClass
            ? "pt-10 pb-5 pl-5 mx-auto text-center text-transparent text-6xl pm-5 bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500"
            : addClass
        }
      >
        {title}
      </h1>
    </>
  );
};

export default TitleText;
