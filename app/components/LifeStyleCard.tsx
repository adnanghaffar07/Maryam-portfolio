import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";

interface LifeStyleCardType {
  data: {
    image: any;
    heading: string;
    description: string;
  };
  index: number;
}
const LifeStyleCard = ({ data, index }: LifeStyleCardType) => {
  return (
    <div
      className="flex flex-col rounded-lg shadow-lg w-[48%] md:w-[47%]"
      key={index}
    >
      <div className="flex flex-col pb-2 sm:pb-5 w-full rounded-lg bg-slate-50">
        <div className="w-full rounded-lg h-[80px] sm:h-[140px] lg:h-[180px]  xl:h-[257px]">
          {
            <Image
              src={urlFor(data.image).url()}
              alt={data.image.alt}
              width={615}
              height={420}
              className="w-full h-full object-cover rounded-t-lg"
            />
          }
        </div>

        <div className="flex flex-col mt-1 sm:mt-2 xl:mt-8 w-full p-2 xl:p-4">
          <p className="text-[9px] sm:text-xs md:text-base lg:text-xl xl:text-[28px] font-semibold text-[#121416]">
            {data.heading}
          </p>

          <p className="mt-2 lg:mt-5 text-[6px] sm:text-[7px] md:text-xs lg:text-lg xl:text-xl text-gray-500">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LifeStyleCard;
