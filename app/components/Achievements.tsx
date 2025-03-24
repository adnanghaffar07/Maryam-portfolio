"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../globals.css";

const Achievements = ({ data }: { data: any }) => {
  const [achievementSlideStyle, setAchievementSlideStyle] = useState({
    width: "304px",
    height: "326px",
  });

  useEffect(() => {
    const updateAchievementSlideStyle = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setAchievementSlideStyle({ width: "250px", height: "265px" });
      } else {
        setAchievementSlideStyle({ width: "304px", height: "326px" });
      }
    };
    updateAchievementSlideStyle();

    window.addEventListener("resize", updateAchievementSlideStyle);

    return () => {
      window.removeEventListener("resize", updateAchievementSlideStyle);
    };
  }, []);
  return (
    <div
      className="flex flex-col justify-center py-6 md:py-10 max-w-[1312px] mx-auto"
      id="achievements"
    >
      <div className="flex flex-col w-fit px-2 sm:px-5 md:px-10">
        <p className="self-start text-base md:text-xl font-semibold text-center text-[#282938]">
          {data.subTitle}
        </p>
        <p className="bg-clip-text text-transparent bg-[#3E30CF] mt-2 md:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight pb-2">
          {data.title}
        </p>
      </div>

      <div className="flex gap-6 justify-center items-start mt-6 lg:mt-16 md:mt-10 overflow-x-hidden w-full xl:w-[1280px] px-2 sm:px-5 md:px-10">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView="auto"
          spaceBetween={30}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="px-5 md:px-10"
          style={{ paddingBottom: "40px" }}
        >
          {data.achievementsArray?.map((card: any, index: number) => (
            <SwiperSlide
              className="flex flex-col px-6 py-6 rounded-lg border-solid shadow-sm bg-[#F5FCFF] border-b-[3px] hover:border-b-indigo-600 h-[265px] md:h-[326px] w-[250px] md:w-[304px] max-md:px-5"
              key={index}
              style={achievementSlideStyle}
            >
              <div className="flex justify-center items-center bg-white rounded-lg shadow-[0px_0px_12px_rgba(0,0,0,0.1)] w-[40px] md:w-[60px] h-[40px] md:h-[60px]">
                <p className="bg-clip-text text-transparent bg-[#3E30CF] text-2xl sm:text-3xl md:text-4xl font-medium h-[40px] w-[40px] flex justify-center items-center">
                  {index + 1}
                </p>
              </div>
              <div className="flex flex-col mt-4 md:mt-6">
                <p className="text-sm md:text-xl font-bold leading-snug text-[#1C1E53]">
                  {card.heading}
                </p>
                <p className="mt-3 md:mt-6 text-xs md:text-base leading-6 text-[#1C1E53]">
                  {card.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
          <div
            className="swiper-pagination"
            style={{
              position: "absolute",
              bottom: "-4px",
              zIndex: 50,
            }}
          ></div>
          <div
            className="swiper-button-next bg-[#5E3BEE] rounded-full w-10 h-10 md:w-12 md:h-12 flex justify-center items-center shadow-lg text-white me-1"
            style={{
              backgroundImage: `url("/next arrow slider.svg")`,
              backgroundSize: "50%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              position: "absolute",
              top: "25%",
              right: "0px",
              width: "40px",
              height: "40px",
            }}
          ></div>
          <div
            className="swiper-button-prev bg-[#5E3BEE] rounded-full w-10 h-10 md:w-12 md:h-12 flex justify-center items-center shadow-lg text-white ms-2"
            style={{
              backgroundImage: `url("/previous slider arrow.svg")`,
              backgroundSize: "50%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              position: "absolute",
              top: "25%",
              right: "0px",
              width: "40px",
              height: "40px",
            }}
          ></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Achievements;
