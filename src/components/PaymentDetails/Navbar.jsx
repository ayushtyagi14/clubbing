import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex flow-row items-center p-4 gap-20 mt-4">
      <img
        width="20"
        height="20"
        src="https://img.icons8.com/material-rounded/20/chevron-left.png"
        alt="chevron-left"
        onClick={() => router.push("/verification")}
      />
      <h1 className="text-[18px] font-bold">Baardos La Citta</h1>
    </div>
  );
};

export default Navbar;
