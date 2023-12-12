import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Tabs = () => {
  const router = useRouter();

  return (
    <div className="fixed bottom-0 w-full flex justify-between items-center bg-white p-5 rounded-t-lg shadow-2xl border z-[999]">
      <p className="text-[26px] font-bold">₹5000</p>
      <button
        className="bg-[#6F3BDD] text-white py-2 px-7 rounded-lg"
        onClick={() => router.push("/")}
      >
        Pay Now
      </button>
    </div>
  );
};

export default Tabs;
