import React, { useState } from "react";

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center">
      {/* Left side with animated menu icon */}
      <div className="flex items-center">
        <button className="flex flex-row items-center gap-2 text-[20px] font-bold">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/000000/menu--v3.png"
            alt="menu--v3"
          />
          Clubbing
        </button>
      </div>

      {/* Right side with user icon */}
      <div className="flex items-center">
        <button className="">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-outlined/24/search--v1.png"
            alt="search--v1"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
