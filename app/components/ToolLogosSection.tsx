import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const ToolLogosSection = ({ data }: { data: any }) => {
  return (
    <section className="h-[180px] md:h-[224px] mx-auto px-16 bg-[#FAFAFA] flex items-center overflow-hidden">
      <div className="w-full flex items-center">
        <div className="flex animate-scroll">
          {data?.map((logo: any, index: number) => (
            <div
              key={index}
              className="w-28 md:w-[154px] h-28 md:h-[154px] bg-[#EAEAEA] px-2 rounded-[26px] flex items-center justify-center mx-8 flex-shrink-0"
            >
              <img
                src={urlFor(logo).url()}
                alt={logo?.alt}
              
                className=" h-[76px] md:h-[96px]"
              />
            </div>
          ))}
        </div>
        <div className="flex animate-scroll">
          {data?.map((logo: any, index: number) => (
            <div
              key={index}
              className="w-28 md:w-[154px] h-28 md:h-[154px] bg-[#EAEAEA] rounded-[26px] flex items-center justify-center mx-8 flex-shrink-0"
            >
              <Image
                src={urlFor(logo).url()}
                alt={logo?.alt}
                width={96}
                height={96}
                className="w-[76px] md:w-[96px] h-[76px] md:h-[96px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolLogosSection;
