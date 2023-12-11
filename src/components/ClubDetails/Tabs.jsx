import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="fixed bottom-0 w-full flex justify-between bg-white p-5 rounded-t-lg shadow-2xl border z-[999]">
      <button className="border border-[#6F3BDD] text-[#6f3bdd] py-2 px-4 rounded-lg">
        Book a Table
      </button>
      <button className="bg-[#6F3BDD] text-white py-2 px-7 rounded-lg">
        Book Now
      </button>
    </div>
  );
};

export default Tabs;
