"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { urlFor } from "@/sanity/lib/image";

const Expertise = ({ data }: { data: any }) => {
  const [slideStyle, setSlideStyle] = useState({
    width: "304px",
    height: "286px",
  });

  const [selected, setSelected] = useState("Expertise");

  const handleClick = (tool: string) => {
    setSelected(tool);
  };

  useEffect(() => {
    const updateSlideStyle = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setSlideStyle({ width: "250px", height: "215px" });
      } else {
        setSlideStyle({ width: "304px", height: "286px" });
      }
    };
    updateSlideStyle();

    window.addEventListener("resize", updateSlideStyle);

    return () => {
      window.removeEventListener("resize", updateSlideStyle);
    };
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center py-6 md:py-16 max-w-[1312px] mx-auto"
      id="expertise"
    >
      <div className="flex flex-col px-2 sm:px-5 2xl:px-0">
        <div className="flex flex-col justify-center w-fit">
          <p className="self-start text-base md:text-xl font-semibold text-center text-[#3E30CF] ">
            {data.subTitle}
          </p>
          <p className="bg-clip-text text-transparent bg-[#3E30CF] mt-2 md:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight pb-2">
            {data.title}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 md:gap-5 items-center mt-4 md:mt-8 w-full text-lg font-medium leading-tight max-md:max-w-full">
          {data.cardsArray
            .map((obj: any) => obj.title)
            .map((tool: any, index: number) => (
              <button
                className={`rounded-lg p-[1.5px] w-fit bg-[#3E30CF] ${
                  selected === tool
                    ? ""
                    : "bg-white border-1 border-transparent"
                } hover:bg-[#3E30CF] transition-all duration-300`}
                key={index}
                onClick={() => handleClick(tool)}
              >
                <p
                  className={`px-[10px] py-1.5 md:py-[13px] rounded-[7px] transition-all duration-300 ${
                    selected === tool
                      ? "bg-transparent text-white"
                      : "bg-white hover:bg-transparent"
                  } group`}
                >
                  <span
                    className={`text-xs md:text-lg bg-clip-text text-transparent bg-[#3E30CF] transition-all duration-300 ${
                      selected === tool ? "text-white" : ""
                    } group-hover:text-white`}
                  >
                    {tool}
                  </span>
                </p>
              </button>
            ))}
        </div>
      </div>

      <div className="flex gap-6 justify-center items-start mt-6 lg:mt-16 md:mt-10 overflow-x-hidden w-full xl:w-[1280px] px-3 sm:px-5 2xl:px-0">
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
          {data.cardsArray
            .filter((obj: any) => obj.title === selected)[0]
            .card.map((card: any, index: number) => {
              return (
                <SwiperSlide
                  className="flex flex-col ps-6 pe-2 py-6 rounded-lg border-solid shadow-sm bg-[#F5FCFF] border-b-[3px] hover:border-b-indigo-600 h-[215px] md:h-[286px] w-[250px] md:w-[304px] max-md:px-5"
                  key={index}
                  style={slideStyle}
                >
                  <div className="flex gap-2 sm:gap-4">
                    {card.images.map((img: any, index: number) => {
                      return (
                        <div
                          className="flex justify-center items-center bg-white rounded-lg shadow-[0px_0px_12px_rgba(0,0,0,0.1)] w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                          key={index}
                        >
                          {img && (
                            <Image
                              alt={img.alt}
                              src={urlFor(img).url()}
                              width={40}
                              height={40}
                              className="w-7 md:w-10"
                            />
                          )}
                        </div>
                      );
                    })}
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
              );
            })}
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
      <style jsx global>{`
        .swiper-button-next::after,
        .swiper-button-prev::after {
          content: none;
        }
        .custom-swiper-pagination .swiper-pagination {
          position: absolute !important;
          bottom: 0px !important;
          z-index: 99 !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
        }

        .swiper-pagination-bullet {
          background-color: #3b82f6; /* Tailwind's bg-blue-500 */
        }

        .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #b416ff, #5e3bee);
        }

        .swiper-button-next {
          right: -2px;
        }

        .swiper-button-prev {
          left: -8px;
        }
      `}</style>
    </div>
  );
};

export default Expertise;
