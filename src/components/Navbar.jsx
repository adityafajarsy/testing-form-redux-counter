import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center h-[100px] bg-stone-300 border-b-1 border-stone-800">
      <div>
        <Link to="/">
          <button className="flex ml-5 bg-blue-300 hover:bg-gray-300 hover:text-blue-300 border text-white border-white p-2 rounded font-semibold transition-all transform hover:scale-110 cursor-pointer">
             Home
          </button>
        </Link>
      </div>

      <div className="flex flex-row gap-2 mr-15">
        <Link to={"profile"}>
          <button>Profile</button>
        </Link>
        <Link to="about">
          <button>About</button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
