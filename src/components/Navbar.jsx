import React, { useState } from "react";

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center">
      {/* Left side with animated menu icon */}
      <div className="flex items-center">
        <button className="text-white">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/ffffff/menu--v3.png"
            alt="menu--v3"
          />
        </button>
      </div>

      {/* Right side with user icon */}
      <div className="flex items-center">
        <button className="text-white">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/fluency-systems-regular/48/ffffff/user--v1.png"
            alt="user--v1"
          />{" "}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
