import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = ({ data }: { data: any }) => {
  return (
    <section className="bg-neutral-50">
      <div className="flex flex-col-reverse lg:flex-row-reverse gap-10 xl:gap-28 2xl:gap-[154px] items-center py-6 sm:py-16 max-md:px-5 max-w-[1270px] mx-auto justify-center">
        <div>
          {data?.image && (
            <Image
              src="/service-img.png"
              alt={data.image.alt}
              width={535}
              height={591}
              className="w-[485px] xl:w-[535px]"
            />
          )}
        </div>
        <div className="flex flex-col">
          <div>
            <h2 className="text-base sm:text-xl font-semibold text-[#282938]">
            Services Highlight
            </h2>
            <p className="mt-2 text-2xl sm:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-[#3E30CF] w-fit">
            Purchase
            </p>
          </div>

          <div className="flex flex-col mt-6 max-w-full gap-4 text-lg uppercase text-neutral-700 ">
            {data.servicesArray.map((service: any, index: number) => {
              return (
                <div
                  className="flex flex-col w-full max-w-[550px] max-md:max-w-full"
                  key={index}
                >
                  <div className="flex flex-wrap gap-2.5 items-center px-5 py-3 sm:py-5 w-full rounded-xl border border-solid border-zinc-900">
                    <Image
                      src={urlFor(service.icon).url()}
                      alt={service.icon.alt}
                      width={40}
                      height={40}
                      className="object-contain shrink-0 self-stretch my-auto w-8 sm:w-10 aspect-square"
                    />
                    <p className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full text-base">
                      {service.serviceName}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <Link
            href={data.meetingButton.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-white rounded-lg bg-[#3E30CF] w-[180px] lg:w-[255px] h-[56px] sm:h-[63px] lg:h-[63px] xl:h-[73px] max-md:px-5 flex items-center justify-center text-base lg:text-xl xl:text-[22px] group transition-transform duration-300"
          >
            <span className="group-hover:-translate-x-1  md:translate-x-4 transform transition-transform duration-300">
              {data.meetingButton.buttonText}
            </span>

              <Image
                src={urlFor(data.meetingButton.icon).url()}
                alt={data.meetingButton.icon.alt}
                width={24}
                height={24}
                className="w-6 ml-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden md:block"
              />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
