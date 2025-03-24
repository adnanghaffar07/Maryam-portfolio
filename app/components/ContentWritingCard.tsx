import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ContentWritingCardType {
  content: {
    image: any;
    tags: string[];
    heading: string;
    description: string;
    authorName: string;
    date: string;
    shares: string;
    link: string;
    authorImage: any;
    buttonText: string;
  };
  index: number;
}
const ContentWritingCard = ({ content, index }: ContentWritingCardType) => {
  return (
    <Link
      href={content.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col rounded-lg shadow-lg w-[48%] md:w-[47%]"
      key={index}
    >
      <div className="flex flex-col pb-2 sm:pb-5 w-full rounded-lg bg-slate-50">
        <div className="relative flex flex-col w-full text-xl text-white rounded-lg h-[192px] sm:h-[222px] md:h-[322px] lg:h-[380px] xl:h-[420px]">
          <div className="w-full h-[420px] rounded-t-lg">
            {content.image && (
              <Image
                src={urlFor(content.image).url()}
                alt={content.image.alt}
                width={615}
                height={420}
                className="w-full h-full object-cover absolute inset-0 rounded-t-lg"
              />
            )}
          </div>
          <div className="absolute top-4 sm:top-7 right-4 sm:right-8 flex gap-2">
            {content.tags.map((category, index) => {
              return (
                <p
                  className="px-1 md:px-2.5 py-[2px] md:py-2 rounded-lg bg-white bg-opacity-20 text-[10px] sm:text-sm xl:text-lg 2x:text-[20px]"
                  key={index}
                >
                  {category}
                </p>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col self-center mt-1 sm:mt-2 xl:mt-8 w-full max-w-[549px] p-2 xl:p-4">
          <p className="text-[9px] sm:text-xs md:text-base lg:text-xl xl:text-[28px] font-semibold text-[#121416]">
            {content.heading}
          </p>
          <div className="flex flex-col items-start mt-0 sm:mt-2 lg:mt-6 text-lg text-gray-500 w-full">
            <div className="flex items-center gap-2 lg:gap-3">
              {content.authorImage && (
                <Image
                  src={urlFor(content.authorImage).url()}
                  alt={content.authorImage.alt}
                  width={40}
                  height={40}
                  className="w-3 sm:w-6 xl:w-10 rounded-full"
                />
              )}
              <p className="text-[7px] sm:text-[8px] lg:text-sm xl:text-[22px] text-[#121416]">
                {content.authorName}
              </p>
              <div className="w-2 sm:w-4 md:w-5 xl:w-9 h-px bg-gray-500 bg-opacity-40 " />
              <p className="text-[5px] sm:text-[7px] md:text-[8px] lg:text-sm xl:text-[18px]">
                {content.date}
              </p>
              <div className="w-[5px] h-[5px] bg-gray-500 bg-opacity-40 rounded-full" />
              <div className="flex items-center gap-1.5">
                <Image
                  src={"/share-icon.svg"}
                  alt="share"
                  width={15}
                  height={16}
                  className="w-2 lg:w-3 xl:w-[15px] aspect-square"
                />

                <p className="text-[5px] sm:text-[7px] md:text-[10px] lg:text-sm xl:text-lg">
                  {content.shares}
                </p>
              </div>
            </div>
            <p className="mt-2 lg:mt-5 text-[6px] sm:text-[7px] md:text-xs lg:text-lg xl:text-xl leading-8 text-gray-500 hidden xl:block">
              {content.description.slice(0, 144)}
              ...
            </p>
            <p className="mt-2 lg:mt-5 text-[6px] sm:text-[7px] md:text-xs lg:text-lg xl:text-xl text-gray-500 hidden lg:block xl:hidden">
              {content.description.slice(0, 124)}
              ...
            </p>
            <p className="mt-2 lg:mt-5 text-[6px] sm:text-[7px] md:text-xs lg:text-lg xl:text-xl leading-8 text-gray-500 hidden md:block lg:hidden">
              {content.description.slice(0, 124)}
              ...
            </p>
            <p
              className="mt-2 lg:mt-5 text-[6px] sm:text-[7px] md:text-xs lg:text-lg xl:text-xl text-gray-500 hidden sm:block md:hidden"
              style={{ lineHeight: 1.5 }}
            >
              {content.description.slice(0, 164)}
              ...
            </p>
            <p
              className="mt-0 lg:mt-5 text-[6px] sm:text-[7px] md:text-xs lg:text-[18px] xl:text-xl text-gray-500 block sm:hidden"
              style={{ lineHeight: 1.5 }}
            >
              {content.description.slice(0, 164)}
              ...
            </p>
            <div className="flex flex-col items-center mt-2 lg:mt-5 text-2xl font-semibold leading-loose">
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#5E3BEE] to-[#B416FF] text-[6px] sm:text-[7px] md:text-xs lg:text-[18px] xl:text-2xl">
                {content.buttonText}
              </p>
              <div className="w-full h-px bg-gradient-to-r from-[#5E3BEE] to-[#B416FF]" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ContentWritingCard;
