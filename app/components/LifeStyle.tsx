"use client";
import Image from "next/image";
import React, { useState } from "react";
import ContentWritingCard from "./ContentWritingCard";
import LifeStyleCard from "./LifeStyleCard";
import { urlFor } from "@/sanity/lib/image";

const LifeStyle = ({ data }: { data: any }) => {
  const [selected, setSelected] = useState("travelling");
  const [showMoreContent, setShowMoreContent] = useState(false);
  const travellingArray = data.cardsArray.filter(
    (card: any) => card.category === "travelling"
  );

  const handleClick = (buttonId: string) => {
    setSelected(buttonId);
    setShowMoreContent(false);
  };
  return (
    <section className="max-w-[1412px] mx-auto">
      <div className="flex flex-col px-1 sm:px-5 py-8 md:py-24 w-full max-md:max-w-full items-center justify-center">
        <div className="flex flex-col items-start w-full max-md:max-w-full">
          <div className="flex flex-col justify-center max-w-full w-[768px]">
            <p className="self-start text-base sm:text-xl font-semibold text-center text-[#282938]">
              {data.subTitle}
            </p>
            <div className="flex flex-col mt-2 md:mt-4 w-full text-5xl font-bold leading-tight max-md:max-w-full max-md:text-4xl">
              <p className="text-2xl sm:text-4xl md:text-5xl w-fit bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] pb-1">
                {data.title}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5 sm:gap-5 items-center mt-4 md:mt-8 text-xs sm:text-lg font-medium leading-tight max-md:max-w-full">
            {data.buttons.map((button: any, index: number) => {
              return (
                <button
                  className={`flex justify-center items-center rounded-lg border border-indigo-600 border-solid bg-indigo-600 bg-opacity-0 h-[34px] sm:h-[50px] px-[10px] hover:bg-gradient-to-tr hover:from-[#B416FF] hover:to-[#5E3BEE] group ${
                    selected === button.category
                      ? "bg-gradient-to-tr from-[#B416FF] to-[#5E3BEE]"
                      : ""
                  }`}
                  onClick={() => handleClick(button.category)}
                  key={index}
                >
                  <p
                    className={`group-hover:text-white bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] group ${
                      selected === button.category ? "text-white" : ""
                    }`}
                  >
                    {button.Title}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-4 lg:mt-20 w-full">
          {selected === "travelling" && (
            <div className="flex gap-6 justify-center">
              <div className="flex flex-col w-[48%]">
                <div className="flex flex-col grow gap-4 max-md:max-w-full">
                  {travellingArray
                    .slice(0, 2)
                    .map((travelitem: any, index: number) => {
                      return (
                        <div
                          className="max-w-[616px] h-auto overflow-hidden relative group rounded-lg"
                          key={index}
                        >
                          {travelitem.image && (
                            <Image
                              src={urlFor(travelitem.image).url()}
                              alt={travelitem.image.alt}
                              width={616}
                              height={827}
                              className="object-cover w-full h-full transform scale-110 transition-transform duration-300 group-hover:scale-100 group-hover:brightness-50"
                            />
                          )}
                          <div className="absolute bottom-0 h-10 lg:h-[70px] xl:h-[116px] w-full flex items-center pl-4 bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                            <span className="text-white text-sm lg:text-xl xl:text-[32px] font-semibold pointer-events-auto">
                              {travelitem.image.hoverText}
                            </span>
                          </div>
                        </div>
                      );
                    })}

                  {showMoreContent && travellingArray.length > 3 && (
                    <div className="max-w-[616px] h-auto overflow-hidden relative group rounded-lg">
                      {travellingArray[4].image && (
                        <Image
                          src={urlFor(travellingArray[4].image).url()}
                          alt={travellingArray[4].image.alt}
                          width={616}
                          height={704}
                          className="object-cover w-full h-full transform scale-110 transition-transform duration-300 group-hover:scale-100 group-hover:brightness-50"
                        />
                      )}
                      <div className="absolute bottom-0 h-10 lg:h-[70px] xl:h-[116px] w-full flex items-center pl-4 bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                        <span className="text-white text-sm lg:text-xl xl:text-[32px] font-semibold pointer-events-auto">
                          {travellingArray[4].image.hoverText}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col w-[48%]">
                <div className="flex flex-col gap-4 grow">
                  {travellingArray
                    .slice(2, 4)
                    .map((card: any, index: number) => {
                      return (
                        <div
                          className="max-w-[616px] h-auto overflow-hidden relative group rounded-lg"
                          key={index}
                        >
                          {card.image && (
                            <Image
                              alt={card.image.alt}
                              src={urlFor(card.image).url()}
                              width={616}
                              height={552}
                              className="object-cover w-full h-full transform scale-110 transition-transform duration-300 group-hover:scale-100 group-hover:brightness-50"
                            />
                          )}
                          <div className="absolute bottom-0 h-10 lg:h-[70px] xl:h-[116px] w-full flex items-center pl-4 bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                            <span className="text-white text-sm lg:text-xl xl:text-[32px] font-semibold pointer-events-auto">
                              {card.image.hoverText}
                            </span>
                          </div>
                        </div>
                      );
                    })}

                  {showMoreContent && travellingArray.length > 4 && (
                    <div className="max-w-[616px] h-auto overflow-hidden relative group rounded-lg">
                      {travellingArray[5].image && (
                        <Image
                          alt={travellingArray[5].image.alt}
                          src={urlFor(travellingArray[5].image).url()}
                          width={616}
                          height={702}
                          className="object-cover w-full h-full transform scale-110 transition-transform duration-300 group-hover:scale-100 group-hover:brightness-50"
                        />
                      )}
                      <div className="absolute bottom-0 h-10 lg:h-[70px] xl:h-[116px] w-full flex items-center pl-4 bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                        <span className="text-white text-sm lg:text-xl xl:text-[32px] font-semibold pointer-events-auto">
                          {travellingArray[5].image.hoverText}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {selected === "contentWriting" && (
            <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-10 2xl:gap-12">
              {data.cardsArray
                .filter((card: any) => card.category === "contentWriting")
                ?.map((content: any, index: number) => (
                  <ContentWritingCard
                    content={content}
                    index={index}
                    key={index}
                  />
                ))}
            </div>
          )}

          {selected === "automationTesting" && (
            <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-10 2xl:gap-12">
              {data.cardsArray
                .filter((card: any) => card.category === "automationTesting")
                .map((item: any, index: number) => {
                  return (
                    <LifeStyleCard data={item} index={index} key={index} />
                  );
                })}
            </div>
          )}

          {selected === "businessAutomation" && (
            <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-10 2xl:gap-12">
              {data.cardsArray
                .filter((card: any) => card.category === "businessAutomation")
                .map((item: any, index: number) => {
                  return (
                    <LifeStyleCard data={item} index={index} key={index} />
                  );
                })}
            </div>
          )}
        </div>

        {selected === "travelling" && !showMoreContent && (
          <button
            className="items-center justify-center w-[122px] h-[50px] text-lg font-medium rounded-lg p-[1.5px] bg-[linear-gradient(274deg,#5E3BEE_25%,#B416FF_100%)] mt-8 md:mt-16"
            onClick={() => setShowMoreContent(true)}
          >
            <span className="w-full h-full bg-white rounded-[7px] flex items-center justify-center hover:bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] group">
              <span className="bg-clip-text text-transparent bg-[linear-gradient(274deg,#5E3BEE_25%,#B416FF_100%)] group-hover:text-white">
                Show More
              </span>
            </span>
          </button>
        )}
      </div>
    </section>
  );
};

export default LifeStyle;
