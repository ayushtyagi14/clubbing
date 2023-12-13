import React from "react";

const Info = () => {
  return (
    <div className="flex flex-col items-center leading-tight border mx-auto w-max px-16 py-4 glass-card mt-2">
      <img src="/assets/user.jpg" alt="user" className="w-32 rounded-full" />
      <h1 className="text-[24px] font-bold">Ayush Tyagi</h1>
      <p className="text-[14px] text-gray-600">ayushtyagi@gmail.com</p>
    </div>
  );
};

export default Info;
