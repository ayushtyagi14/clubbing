import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Content = () => {
  const router = useRouter();

  const tabs = ["My Bookings", "Past Bookings", "Friends"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const myBookings = [
    {
      id: 1,
      name: "Playboy",
      date: "22/12/2023",
      time: "10:00 PM",
      tickets: "1 Stag 2 Couple",
      imgUrl: "/assets/playboy.jpg",
    },
    {
      id: 2,
      name: "Diablo",
      date: "24/12/2023",
      time: "11:00 PM",
      tickets: "1 Stag",
      imgUrl: "/assets/diablo.webp",
    },
    {
      id: 3,
      name: "SoHo",
      date: "28/12/2023",
      time: "2:00 AM",
      tickets: "1 Female 1 Couple",
      imgUrl: "/assets/soho.webp",
    },
  ];

  const pastBookings = [
    {
      id: 1,
      name: "Slique",
      date: "02/12/2023",
      time: "10:30 PM",
      tickets: "2 Stag 1 Couple",
      imgUrl: "/assets/slique.webp",
    },
    {
      id: 2,
      name: "Monet",
      date: "09/12/2023",
      time: "11:00 PM",
      tickets: "1 Couple",
      imgUrl: "/assets/monet.webp",
    },
  ];

  const friends = [
    {
      id: 1,
      name: "Saksham",
      userName: "sakshamchauhan",
      email: "sakshamchauhan@gmail.com",
      imgUrl: "/assets/user2.jpg",
    },
    {
      id: 2,
      name: "Vridhi",
      userName: "vridhigarg",
      email: "vridhigarg@gmail.com",
      imgUrl: "/assets/user4.jpg",
    },
    {
      id: 3,
      name: "Hooda",
      userName: "priyansh",
      email: "priyanshhooda@gmail.com",
      imgUrl: "/assets/user3.jpg",
    },
    {
      id: 3,
      name: "Punjabi",
      userName: "punjabii",
      email: "punjabi@gmail.com",
      imgUrl: "/assets/user5.jpg",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "My Bookings":
        return (
          <div className="w-[95%] mx-auto flex flex-col gap-4">
            {myBookings.map((item) => (
              <div
                className="glass-card flex flex-row items-center justify-between py-2 px-5"
                key={item.id}
                onClick={() => router.push("/club-detail")}
              >
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  className="w-28 h-28 rounded-xl"
                />
                <div className="text-[14px] text-end">
                  <h1 className="font-bold text-[16px]">{item.name}</h1>
                  <p>{item.date}</p>
                  <p>{item.time}</p>
                  <p>{item.tickets}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case "Past Bookings":
        return (
          <div className="w-[95%] mx-auto flex flex-col gap-4">
            {pastBookings.map((item) => (
              <div
                className="glass-card flex flex-row items-center justify-between py-2 px-5"
                key={item.id}
                onClick={() => router.push("/club-detail")}
              >
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  className="w-28 rounded-xl"
                />
                <div className="text-[14px] text-end">
                  <h1 className="font-bold text-[16px]">{item.name}</h1>
                  <p>{item.date}</p>
                  <p>{item.time}</p>
                  <p>{item.tickets}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case "Friends":
        return (
          <div className="w-[95%] mx-auto flex flex-col gap-4">
            {friends.map((item) => (
              <div
                className="glass-card flex flex-row items-center justify-between py-2 px-4"
                key={item.id}
              >
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  className="w-20 rounded-full"
                />
                <div className="text-end text-[12px]">
                  <p className="text-[14px] font-bold">{item.name}</p>
                  <p>@{item.userName}</p>
                  <p>{item.email}</p>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-6 mb-28">
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
  );
};

export default Content;
