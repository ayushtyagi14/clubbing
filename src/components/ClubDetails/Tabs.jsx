import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Tabs = () => {
  const router = useRouter();

  return (
    <div className="fixed bottom-0 w-full flex justify-between bg-white p-5 rounded-t-lg shadow-2xl border z-[999]">
      <button className="border border-[#6F3BDD] text-[#6f3bdd] py-2 px-4 rounded-lg">
        Book a Table
      </button>
      <button
        className="bg-[#6F3BDD] text-white py-2 px-7 rounded-lg"
        onClick={() => router.push("/club-booking")}
      >
        Book Now
      </button>
    </div>
  );
};

export default Tabs;
