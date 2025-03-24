"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../globals.css";
import Image from "next/image";

const Testimonials = () => {
  const [achievementSlideStyle, setAchievementSlideStyle] = useState({
    width: "304px",
    height: "326px",
  });

  useEffect(() => {
    const updateAchievementSlideStyle = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setAchievementSlideStyle({ width: "304px", height: "326px" });
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

  const testimonialsData = {
    subTitle: "What People Say About Me",
    title: "Testimonials",
    testimonialArray: [
      {
        name: "Elvis Doe",
        publishdate: "Feb 15, 2025",
        rating: 5,
        description:
          "Maryam is an outstanding Full Stack Developer. Her ability to build seamless, scalable applications is truly remarkable!",
        personIcon: "/test-5.png",
      },
      {
        name: "Lara Smith",
        publishdate: "Jan 20, 2025",
        rating: 4,
        description:
          "Maryam’s automation skills have significantly improved our workflows. She always finds efficient and innovative solutions!",
        personIcon: "/test-4.png",
      },
      {
        name: "Emily Davis",
        publishdate: "Dec 10, 2024",
        rating: 5,
        description:
          "Working with Maryam has been a game-changer. Her expertise in both frontend and backend development ensures smooth project execution!",
        personIcon: "/test3.png",
      },
      {
        name: "Micheal",
        publishdate: "Mar 5, 2025",
        rating: 5,
        description:
          "Maryam’s automation expertise has optimized our business operations. Her ability to simplify complex processes is invaluable!",
        personIcon: "/test-2.png",
      },
      {
        name: "Robert Wilson",
        publishdate: "Apr 12, 2025",
        rating: 4,
        description:
          "Maryam’s deep knowledge of Full Stack Development and automation has made our projects more efficient and scalable. Highly recommended!",
        personIcon: "/test-1.png",
      },
    ],
  };
  
  return (
    <div className="flex flex-col justify-center py-6 md:py-10 max-w-[1312px] mx-auto">
      <div className="flex flex-col w-fit px-2 sm:px-5 md:px-10">
        <p className="self-start text-base md:text-xl font-semibold text-center text-[#282938]">
          {testimonialsData.subTitle}
        </p>
        <p className="bg-clip-text text-transparent bg-[#3E30CF] mt-2 md:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight pb-2">
          {testimonialsData.title}
        </p>
      </div>

      <div className="flex gap-6 justify-center items-start mt-6 lg:mt-16 md:mt-10 overflow-x-hidden w-full xl:w-[1280px] px-3 sm:px-5 md:px-10">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView="auto"
          spaceBetween={90}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="px-5 md:px-10"
          style={{ paddingBottom: "80px" }}
        >
          {testimonialsData.testimonialArray.map((card, index) => (
            <SwiperSlide key={index} style={achievementSlideStyle}>
              <div className="flex flex-col p-6 bg-white rounded-lg border border-black border-opacity-10 w-[362px] h-[360px]">
                <div className="flex justify-between w-full gap-5">
                  <div className="flex items-center gap-5">
                    {card?.personIcon && (
                      <Image
                        width={56}
                        height={56}
                        alt={card.name}
                        src={card.personIcon}
                        className="object-contain w-14 rounded-[31px]"
                      />
                    )}
                    <div>
                      <p className="text-lg font-semibold text-neutral-700">
                        {card.name}
                      </p>
                      <p className="text-lg text-black">{card.publishdate}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1.5 items-center mt-4">
                  {[...Array(card.rating)].map((_, index) => (
                    <Image
                      key={index}
                      alt="rating"
                      width={32}
                      height={32}
                      src="/rating-star.svg"
                      className="object-contain w-8"
                    />
                  ))}
                </div>
                <p className="mt-4 text-xl font-medium text-neutral-700 leading-8 h-[160px]">
                  {card.description}
                </p>
              </div>
            </SwiperSlide>
          ))}

          <div
            className="swiper-pagination"
            style={{ position: "absolute", bottom: "-4px", zIndex: 50 }}
          ></div>

          <div
            className="swiper-button-next bg-[#5E3BEE] rounded-full w-10 h-10 md:w-12 md:h-12 flex justify-center items-center shadow-lg text-white me-1"
            style={{ backgroundImage: `url("/next arrow slider.svg")`, backgroundSize: "50%", backgroundRepeat: "no-repeat", backgroundPosition: "center", position: "absolute", top: "25%", right: "0px", width: "40px", height: "40px" }}
          ></div>
          <div
            className="swiper-button-prev bg-[#5E3BEE] rounded-full w-10 h-10 md:w-12 md:h-12 flex justify-center items-center shadow-lg text-white ms-2"
            style={{ backgroundImage: `url("/previous slider arrow.svg")`, backgroundSize: "50%", backgroundRepeat: "no-repeat", backgroundPosition: "center", position: "absolute", top: "25%", left: "0px", width: "40px", height: "40px" }}
          ></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
