import React from "react";

const Button = () => {
  return (
    <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
      <svg
        className="w-4 h-4 fill-current opacity-50 shrink-0"
        viewBox="0 0 16 16"
      >
        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
      </svg>
      <span className="hidden xs:block ml-2">Add view</span>
    </button>
  );
};

export default Button;
