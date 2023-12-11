import React, { useState } from "react";

const ClubDetail = () => {
  const tabs = ["Description", "Menu", "Drinks", "Photos"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Description":
        return (
          <div className="w-[95%] mx-auto">
            <p className="">
              THE CITY OF BACCHUS A city blessed by the god of fun and revelry
              himself. Baardos is a shrine, open to those ready to succumb
              themselves to Bacchus, leaving their worries at the doorstep.
              Inspired by the grandeur of ancient roman architecture, our large
              arches, glass atrium and river of gold flowing through our walls
              transport you to a new dimension.
            </p>
          </div>
        );
      case "Menu":
        return (
          <div className="w-[95%] mx-auto grid grid-cols-2 gap-5">
            <img src="/assets/menu.jpg" alt="Menu" className="rounded-xl" />
            <img src="/assets/menu2.jpg" alt="Menu2" className="rounded-xl" />
          </div>
        );
      case "Drinks":
        return (
          <div className="w-[95%] mx-auto grid grid-cols-2 gap-5">
            <img src="/assets/drinks.jpg" alt="Drinks" className="rounded-xl" />
            <img
              src="/assets/drinks2.jpg"
              alt="Drinks2"
              className="rounded-xl"
            />
          </div>
        );
      case "Photos":
        return (
          <div className="w-[95%] mx-auto grid grid-cols-2 gap-1">
            <img
              src="/assets/baardos3.jpeg"
              alt="baardos"
              className="rounded-2xl"
            />
            <img
              src="/assets/baardos4.jpg"
              alt="baardos"
              className="rounded-2xl"
            />
            <img
              src="/assets/baardos2.jpeg"
              alt="baardos"
              className="rounded-2xl"
            />
            <img
              src="/assets/baardos5.jpg"
              alt="baardos"
              className="rounded-2xl"
            />
            <img
              src="/assets/baardos1.jpg"
              alt="baardos"
              className="rounded-2xl"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col w-full mb-40">
      <div className="mt-2 flex flex-col gap-4 w-[95%] mx-auto">
        <img
          src="/assets/baardos1.jpg"
          alt="Baardos"
          className="rounded-[20px]"
        />
        <div className="w-[95%] mx-auto flex flex-col items-start leading-tight">
          <h1 className="text-[24px] font-bold">Baardos La Citta</h1>
          <p className="text-[14px] text-gray-500">
            24-B 4th floor, Pusa Rd, New Delhi, Delhi 110005
          </p>
        </div>
        <div className="text-end w-[95%] mx-auto">
          <p className="text-[18px]">
            Starting At <span className="font-bold">10:00 PM</span>
          </p>
        </div>
      </div>

      <div className="mt-6 w-[95%] mx-auto">
        <div className="flex justify-between">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-[14px] ${
                activeTab === tab ? "border-b-2 border-[#6F3BDD]" : ""
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-4">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default ClubDetail;
