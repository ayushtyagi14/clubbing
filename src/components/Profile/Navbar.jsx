import React, { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <button
            className="flex flex-row items-center gap-2"
            onClick={toggleSidebar}
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/000000/menu--v3.png"
              alt="menu--v3"
            />
          </button>
        </div>

        <h1 className="font-bold">@ayushtyagi</h1>

        <div className="flex items-center">
          <button className="">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/puffy-filled/30/experimental-create-new-puffy-filled.png"
              alt="experimental-create-new-puffy-filled"
            />
          </button>
        </div>
      </nav>

      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 h-full w-full bg-gray-800 bg-opacity-50 z-[1000]"
          onClick={closeSidebar}
        >
          <div className="fixed top-0 left-0 h-full w-60 bg-white shadow-lg p-4">
            {/* Close button */}
            <button className="absolute top-4 right-4" onClick={closeSidebar}>
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/material-rounded/20/delete-sign.png"
                alt="delete-sign"
              />
            </button>
            <div className="flex flex-col items-start h-[90%] justify-between mt-10">
              <h1 className="text-[28px] font-bold">Clubbing</h1>
              <ul className="text-[14px]">
                <li className="border-y py-5">Night Clubs</li>
                <li className="border-y py-5">After Party</li>
                <li className="border-y py-5">Special Events</li>
              </ul>
              <ul className="mb-10">
                <li className="mb-5 text-[18px] font-bold flex flex-row items-center gap-2">
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/fluency-systems-regular/20/settings--v1.png"
                    alt="settings--v1"
                  />{" "}
                  Settings
                </li>
                <li className="text-[18px] font-bold flex flex-row items-center gap-2">
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/fluency-systems-filled/20/exit.png"
                    alt="exit"
                  />{" "}
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
