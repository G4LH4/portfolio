/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

const Tip = ({ addClass }) => {
  const [textUpdated, setTextUpdated] = useState({
    updated: false,
  });
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTextUpdated({ updated: true });
    }, 3000);
  }, []);

  return (
    <div
      id="tip"
      onClick={() => {
        setShowText(true);

        setTimeout(() => {
          setShowText(false);
        }, 3500);
      }}

      className={`fixed z-index p-2 ${addClass} z-50 text-white transform -translate-x-2/2 bottom-0 mb-3 right-5 bg-gray-500 rounded shadow-2xl left-2/2 w-fit`}
    >
      <div className="relative cursor-pointer  font-mono ">
        {showText && <ShowText state={textUpdated} />}

        <div className="absolute top-0 right-0 w-4 h-4 -mt-3 -mr-3 bg-blue-300 rounded-full animate-ping"></div>
        <div className="absolute top-0 right-0 w-4 h-4 -mt-3 -mr-3 bg-blue-300 rounded-full"></div>
      </div>
    </div>
  );
};

const ShowText = ({ state }) => {
  const { updated } = state;


  if (updated === true) {
    return (
      <div>
        <h1>Try grabbing the images</h1>
      </div>
    );
  } else {
    return "";
  }
};

export default Tip;
