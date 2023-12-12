import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Tabs = () => {
  const router = useRouter();

  return (
    <div className="fixed bottom-0 w-full flex justify-end bg-white p-5 rounded-t-lg shadow-2xl border z-[999]">
      <button
        className="bg-[#6F3BDD] text-white py-2 px-7 rounded-lg flex flex-row items-center gap-2"
        onClick={() => router.push("/club-booking")}
      >
        Proceed{" "}
        <img
          width="16"
          height="16"
          src="https://img.icons8.com/ios-glyphs/ffffff/16/chevron-right.png"
          alt="chevron-right"
        />
      </button>
    </div>
  );
};

export default Tabs;
