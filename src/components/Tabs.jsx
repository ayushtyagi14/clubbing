import React from "react";

const Tabs = () => {
  return (
    <div className="fixed bottom-6 lg:left-[26rem] left-4 lg:right-[26rem] right-4 flex justify-between bg-gray-800 p-4 rounded-full shadow-lg z-[999] opacity-[90%]">
      <button className="text-white">Night Clubs</button>
      <button className="text-white">After Party</button>
      <button className="text-white">Special Events</button>
    </div>
  );
};

export default Tabs;
