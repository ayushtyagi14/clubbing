import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Verification = () => {
  const router = useRouter();
  const [isProceedEnabled, setIsProceedEnabled] = useState(true);

  const handleInputChange = (member) => {
    const nameInput = document.getElementById(`Name${member}`);
    const emailInput = document.getElementById(`Email${member}`);
    const aadharInput = document.getElementById(`Aadhar${member}`);

    // Check if all fields are filled
    const allFieldsFilled =
      nameInput.value.trim() !== "" &&
      emailInput.value.trim() !== "" &&
      aadharInput.value.trim() !== "";

    // Update isProceedEnabled
    setIsProceedEnabled(allFieldsFilled);
  };

  const handleVerify = () => {
    // Your verification logic here
  };

  return (
    <>
      <div className="flex flex-col gap-3 mb-28">
        <img src="/assets/baardos1.jpg" alt="Baardos" />
        <h1 className="text-center font-bold text-[22px]">
          Member Verification
        </h1>
        {/* Member 1 */}
        <div className="border-b border-gray-400 pb-4">
          <div className="flex flex-col w-[90%] mx-auto gap-4">
            <h1 className="font-bold">Member 1</h1>
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                name="Name1"
                id="Name1"
                placeholder="Full name"
                className="justify-between border-b border-[#6f3bdd] rounded-b-md text-[14px] focus:outline-none"
                onChange={() => handleInputChange(1)}
              />
              <input
                type="email"
                name="Email1"
                id="Email1"
                placeholder="Email address"
                className="justify-between border-b border-[#6f3bdd] rounded-b-md text-[14px] focus:outline-none"
                onChange={() => handleInputChange(1)}
              />
            </div>
            <input
              type="number"
              name="Aadhar1"
              id="Aadhar1"
              placeholder="Enter Aadhar number"
              onWheel={(e) => e.target.blur}
              className="w-full border-b border-[#6f3bdd] rounded-b-md text-[14px] text-center focus:outline-none"
              onChange={() => handleInputChange(1)}
            />
            <button
              className="bg-[#6f3bdd] text-white mx-auto py-1 px-4 rounded-lg text-[14px]"
              onClick={handleVerify}
            >
              Verify
            </button>
          </div>
        </div>

        {/* Member 2 */}
        <div className="border-b border-gray-400 pb-4">
          <div className="flex flex-col w-[90%] mx-auto mt-4 gap-4">
            <h1 className="font-bold">Member 2</h1>
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                name="Name2"
                id="Name2"
                placeholder="Full name"
                className="justify-between border-b border-[#6f3bdd] rounded-b-md text-[14px] focus:outline-none"
                onChange={() => handleInputChange(2)}
              />
              <input
                type="email"
                name="Email2"
                id="Email2"
                placeholder="Email address"
                className="justify-between border-b border-[#6f3bdd] rounded-b-md text-[14px] focus:outline-none"
                onChange={() => handleInputChange(2)}
              />
            </div>
            <input
              type="number"
              name="Aadhar2"
              id="Aadhar2"
              placeholder="Enter Aadhar number"
              onWheel={(e) => e.target.blur}
              className="w-full border-b border-[#6f3bdd] rounded-b-md text-[14px] text-center focus:outline-none"
              onChange={() => handleInputChange(2)}
            />
            <button
              className="bg-[#6f3bdd] text-white mx-auto py-1 px-4 rounded-lg text-[14px]"
              onClick={handleVerify}
            >
              Verify
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-full flex justify-end bg-white p-5 rounded-t-lg shadow-2xl border z-[999]">
        <button
          className={`bg-[#6F3BDD] text-white py-2 px-7 rounded-lg flex flex-row items-center gap-2 ${
            isProceedEnabled ? "" : "opacity-50 cursor-not-allowed"
          }`}
          onClick={() => isProceedEnabled && router.push("/payment-details")}
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
    </>
  );
};

export default Verification;
