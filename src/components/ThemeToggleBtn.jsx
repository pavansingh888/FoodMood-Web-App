import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../utils/userSlice";

const ThemeToggleBtn = () => {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.user.theme );

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
      <button
      onClick={handleToggle}
      className="relative w-8 h-8 mx-1 p-[10px] max-[470px]:py-[6px] max-[470px]:px-[10px] max-[320px]:w-[20px] max-[320px]:h-[20px] max-[470px]:w-[28px] max-[470px]:h-[28px]  flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 shadow-md transition-all duration-300"
      aria-label="Toggle theme"
    >
      {/* Sun Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`absolute w-5 h-5 max-[320px]:w-[10px] max-[320px]:h-[10px] max-[470px]:w-[13px] max-[470px]:h-[13px] text-yellow-500 transition-opacity duration-300 ${
            theme === 'dark' ? "opacity-0 scale-50" : "opacity-100 scale-100"
        }`}
      >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="4"></line>
        <line x1="12" y1="20" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"></line>
        <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="4" y2="12"></line>
        <line x1="20" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"></line>
        <line x1="17.66" y1="6.34" x2="19.78" y2="4.22"></line>
      </svg>

      {/* Moon Icon */}
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  className={`absolute w-6 h-6 max-[320px]:w-[10px] max-[320px]:h-[10px] max-[470px]:w-[13px] max-[470px]:h-[13px]   text-gray-700 dark:text-gray-200 transition-opacity duration-300 ${theme === 'dark' ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
  <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"></path>    
</svg>


    </button>

    
  );
};

export default ThemeToggleBtn;
