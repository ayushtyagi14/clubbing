import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Tabs = () => {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    router.push(`/${tab}`);
  };

  return (
    <div className="fixed bottom-0 w-full flex justify-between bg-white p-5 rounded-t-lg shadow-2xl border z-[999]">
      <button
        className={`flex flex-col items-center focus:outline-none ${
          activeTab === "" ? "text-[#6F3BDD]" : "text-gray-500"
        }`}
        onClick={() => handleTabClick("")}
      >
        <img
          width="20"
          height="20"
          src={`https://img.icons8.com/small/${
            activeTab === "home" ? "6F3BDD" : "000000"
          }/20/home.png`}
          alt="home"
        />
        Home
      </button>
      <button
        className={`flex flex-col items-center focus:outline-none ${
          activeTab === "explore" ? "text-[#6F3BDD]" : "text-gray-500"
        }`}
        onClick={() => handleTabClick("explore")}
      >
        <img
          width="20"
          height="20"
          src={`https://img.icons8.com/material-outlined/${
            activeTab === "explore" ? "6F3BDD" : "000000"
          }/20/compass.png`}
          alt="compass"
        />
        Explore
      </button>
      <button
        className={`flex flex-col items-center focus:outline-none ${
          activeTab === "profile" ? "text-[#6F3BDD]" : "text-gray-500"
        }`}
        onClick={() => handleTabClick("profile")}
      >
        <img
          width="20"
          height="20"
          src={`https://img.icons8.com/fluency-systems-regular/${
            activeTab === "profile" ? "6F3BDD" : "000000"
          }/20/user--v1.png`}
          alt="user--v1"
        />
        Profile
      </button>
    </div>
  );
};

export default Tabs;
