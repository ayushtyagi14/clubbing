import React from "react";

const PaymentDetails = () => {
  return (
    <>
      <div className="flex flex-row items-center w-[95%] mx-auto justify-between mt-6">
        <div className="flex flex-col items-start font-bold text-[14px]">
          <p>20/12/2023</p>
          <p>10:00 PM</p>
          <p className="flex flex-row items-center gap-2">
            <img
              width="14"
              height="14"
              src="https://img.icons8.com/ios/14/marker--v1.png"
              alt="marker--v1"
            />
            Baardos La Citta
          </p>
          <p className="text-[10px] text-gray-400 w-[90%]">
            24-B 4th floor, Pusa Rd, New Delhi, Delhi 110005
          </p>
        </div>
        <img
          src="/assets/baardos1.jpg"
          alt="Baardos"
          className=" w-[40%] rounded-xl"
        />
      </div>

      <div className="py-4 border-y border-gray-400 my-6">
        <div className="flex flex-col w-[90%] mx-auto gap-2">
          <div className="flex flex-row items-center w-full justify-between">
            <p className="font-bold">1 Stag Entry</p>
            <span>₹3000</span>
          </div>
          <div className="flex flex-row items-center w-full justify-between">
            <p className="font-bold">1 Couple Entry</p>
            <span>₹0</span>
          </div>
          <p className="text-[12px] text-center mt-2 text-gray-600">
            *Note the security amount to be deposited will be ₹1000 for each
            entry to be refunded after the arrival*
          </p>
        </div>
      </div>

      <div className="flex flex-col w-[90%] mx-auto gap-2">
        <div className="flex flex-row items-center w-full justify-between">
          <p className="font-bold">Item Total</p>
          <span>₹3000</span>
        </div>
        <div className="flex flex-row items-center w-full justify-between">
          <p className="font-bold">Deposite (Refundable)</p>
          <span>₹2000</span>
        </div>
        <div className="flex flex-row items-center w-full justify-between">
          <p className="font-bold">Grand Total</p>
          <span>₹5000</span>
        </div>
        <p className="text-[12px] underline text-gray-600">
          Term and conditions
        </p>
      </div>
    </>
  );
};

export default PaymentDetails;
