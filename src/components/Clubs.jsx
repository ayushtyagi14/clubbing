"use client";

import React, { useEffect, useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { data } from "@/app/data";

const Clubs = () => {
  const categorizedData = data.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const Slider = ({ items }) => {
    const autoplayDelay = 3000;
    const videoDelay = 1500;

    const [width, setWidth] = useState(null);
    let mobile = false;

    useEffect(() => {
      setWidth(window.innerWidth);
      window.addEventListener("resize", () => setWidth(window.innerWidth));
      return () => {
        window.removeEventListener("resize", () => setWidth(window.innerWidth));
      };
    }, []);

    if (width < 1000) {
      mobile = true;
    } else {
      mobile = false;
    }

    const swiperRef = useRef(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const handleSlideChange = (swiper) => {
      setCurrentSlideIndex(swiper.realIndex);
    };

    return (
      <div className="relative w-full mx-auto mb-16">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={mobile ? 1.2 : 3}
          speed={videoDelay}
          loop={true}
          centeredSlides={false}
          className="mySwiper"
          onSlideChange={handleSlideChange}
        >
          {items.map((item) => (
            <SwiperSlide
              key={item.id}
              className="w-full py-4 px-3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 glass-card mb-10 ml-1 mt-1 flex flex-col items-center"
            >
              <div className="mb-4">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="object-cover w-full h-48 rounded-xl"
                />
              </div>
              <div className="flex flow-row items-center w-full justify-between">
                <h1 className="text-[18px] font-bold">{item.name}</h1>
                <p>{item.location}</p>
              </div>
              <p className="text-center mt-3">{item.timings}</p>
              <p className="text-center mt-5 w-1/2 mx-auto py-2 rounded-xl bg-[#6F3BDD] text-white">
                Reserve Now
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  return (
    <main className="w-[90%] mx-auto my-8">
      {Object.entries(categorizedData).map(([category, items]) => (
        <div key={category} className="mb-8">
          <div className="flex flex-row items-center w-full justify-between mb-4">
            <h2 className="text-2xl font-bold">{category}</h2>
            <button>View All</button>
          </div>
          <Slider items={items} />
        </div>
      ))}
    </main>
  );
};

export default Clubs;
