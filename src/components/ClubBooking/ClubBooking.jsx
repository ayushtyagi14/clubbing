import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ClubBooking = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [stagCount, setStagCount] = useState(0);
  const [coupleCount, setCoupleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  const [isProceedEnabled, setIsProceedEnabled] = useState(true);

  const router = useRouter();

  const handleAdd = (entryType) => {
    switch (entryType) {
      case "Stag":
        setStagCount((prevCount) => prevCount + 1);
        break;
      case "Couple":
        setCoupleCount((prevCount) => prevCount + 1);
        break;
      case "Female":
        setFemaleCount((prevCount) => prevCount + 1);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3 mb-28">
        <img src="/assets/baardos1.jpg" alt="Baardos" />
        <div>
          <h1 className="text-[20px] font-bold text-center">Select the Date</h1>
        </div>
        <div className="text-center">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MM/dd/yyyy"
            className="border border-gray-300 px-3 py-2 rounded-md text-black focus:outline-[#6f3bdd]"
          />
        </div>
        <div>
          <h1 className="text-[20px] font-bold text-center">RSVP</h1>
          <div className="flex flex-col gap-4 w-[90%] mx-auto mt-2">
            <EntryType
              entryType="Stag"
              count={stagCount}
              onAdd={() => handleAdd("Stag")}
            />
            <EntryType
              entryType="Couple"
              count={coupleCount}
              onAdd={() => handleAdd("Couple")}
            />
            <EntryType
              entryType="Female"
              count={femaleCount}
              onAdd={() => handleAdd("Female")}
            />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-full flex justify-end bg-white p-5 rounded-t-lg shadow-2xl border z-[999]">
        <button
          className={`bg-[#6F3BDD] text-white py-2 px-7 rounded-lg flex flex-row items-center gap-2 ${
            isProceedEnabled ? "" : "opacity-50 cursor-not-allowed"
          }`}
          onClick={() => isProceedEnabled && router.push("/verification")}
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

const EntryType = ({ entryType, count, onAdd }) => (
  <div className="flex flex-row items-center w-full justify-between">
    <h1 className="text-[18px]">{`${entryType} Entry ${
      entryType === "Stag" ? "(₹3000)" : ""
    }`}</h1>
    <button
      className="py-2 px-4 rounded-full bg-[#6f3bdd] text-white flex flex-row items-center gap-2"
      onClick={onAdd}
    >
      {count > 0 ? (
        <>
          {count}
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/material-rounded/ffffff/20/plus-math--v1.png"
            alt="plus-math--v1"
          />
        </>
      ) : (
        <>
          Add
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/material-rounded/ffffff/20/plus-math--v1.png"
            alt="plus-math--v1"
          />
        </>
      )}
    </button>
  </div>
);

export default ClubBooking;
