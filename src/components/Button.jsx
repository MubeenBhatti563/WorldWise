import React from "react";

const add = "px-4 py-1 bg-green-500 text-gray-900 rounded-md cursor-pointer";
const back = "px-4 py-1 bg-[rgb(61,63,68)] border rounded-md cursor-pointer";
const position =
  "absolute bottom-8 left-1/2 -translate-x-1/2 z-[1000] px-4 py-2 bg-green-500 text-gray-900 font-bold rounded-full shadow-2xl hover:bg-green-600 transition-all active:scale-95 whitespace-nowrap cursor-pointer";

const Button = ({ children, type, onClick }) => {
  let style = null;
  if (type === "back") style = back;
  else if (type === "add") style = add;
  else style = position;

  return (
    <button onClick={onClick} className={style}>
      {children}
    </button>
  );
};

export default Button;
