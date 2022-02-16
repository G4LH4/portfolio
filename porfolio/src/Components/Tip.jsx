/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Tip = ({ addClass }) => {
  const [text, setText] = useState({
    text: "Try grabbing the images",
    updated: false,
  });
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setText({ text: "", updated: true });
    }, 3000);
  }, []);

  return (
    <motion.div
      id="tip"
      onClick={() => {
        setShowText(true);

        setTimeout(() => {
          setShowText(false);
        }, 3000);
      }}
      className={`fixed z-index p-2 ${addClass} z-50 text-white transform -translate-x-2/2 bottom-0 mb-3 right-5 bg-gray-500 rounded shadow-2xl left-2/2 w-fit`}
    >
      <div className="relative font-mono ">
        {showText ? <ShowText state={text} /> : ""}

        <h1 className="p-1.5">{text.text}</h1>
        <div className="absolute top-0 right-0 w-4 h-4 -mt-1 -mr-1 bg-blue-300 rounded-full animate-ping"></div>
        <div className="absolute top-0 right-0 w-4 h-4 -mt-1 -mr-1 bg-blue-300 rounded-full"></div>
      </div>
    </motion.div>
  );
};

const ShowText = ({ state }) => {
  const { updated } = state;

  if (updated) {
    return (
      <div>
        <h1 className={"mt-2"}>Try grabbing the images</h1>
      </div>
    );
  } else {
    return "";
  }
};

export default Tip;
