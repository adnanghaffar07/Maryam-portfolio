"use client";
import Image from "next/image";
import React from "react";

const HireMe = () => {
  const handleScroll = (e: any, targetId: any) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const data = {
    buttonsArray: [
      {
        _key: "1",
        icon: {
          url: "/award.svg", // Replace with the actual icon path
          alt: "Award",
        },
        buttonText: "1k+",
        buttonDescription: "Project Completed",
      },
      {
        _key: "2",
        icon: {
          url: "/star.svg", // Replace with the actual icon path
          alt: "Star",
        },
        buttonText: "5.0",
        buttonDescription: "Client Satisfaction",
      },
    ],
  };
  

  return (
    <section className="bg-neutral-50">
      <div className="flex flex-col-reverse lg:flex-row-reverse gap-10 2xl:gap-[86px] items-center py-6 sm:py-16 max-md:px-5 max-w-[1270px] mx-auto justify-center">
        <div>
    
            <Image
              src="/hire.png"
              alt="Why hire me"
              width={535}
              height={591}
              className="w-[485px] xl:w-[535px]"
            />
    
        </div>
        <div className="flex flex-col">
          <div>
            <h2 className="text-base sm:text-xl font-semibold text-[#282938]">
            Skilled, Reliable, Dedicated.            </h2>
            <p className="mt-2 text-2xl sm:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-[#3E30CF] w-fit pb-1">
            Why Hire Me?            </p>
          </div>
          <div className="max-w-[450px] xl:max-w-[616px] text-[#1C1E53]">
            <p className="mt-6 text-base sm:text-lg leading-6 sm:leading-7">
              With a decade of full-stack development experience, I combine technical expertise and strong problem-solving skills to create seamless, scalable web applications. I’m dedicated to delivering fast, efficient, and high-quality solutions tailored to your specific requirements. Whether it’s front-end, back-end, or the entire stack, I ensure every project is executed with precision and completed on time. Let&apos;s collaborate to transform your vision into reality!
            </p>
          </div>

          <div className="flex gap-10 sm:gap-24 xl:gap-32 items-start mt-6 w-full max-md:max-w-full">
            {data?.buttonsArray &&
              data.buttonsArray.map((singlebutton: any) => {
                return (
                  <div className="flex flex-col" key={singlebutton._key}>
                    <div className="flex gap-1 self-start text-[22px] sm:text-4xl font-medium tracking-tight whitespace-nowrap items-center">
                      {singlebutton?.icon && (
                        <Image
                          src={singlebutton?.icon.url}
                          alt={singlebutton?.icon?.alt}
                          width={48}
                          height={48}
                          className="w-[26px] sm:w-12"
                        />
                      )}

                      <p className="bg-clip-text text-transparent bg-[#3E30CF]">
                        {singlebutton?.buttonText}
                      </p>
                    </div>
                    <p className="mt-2.5 text-base sm:text-xl tracking-tight text-[#667085]">
                      {singlebutton?.buttonDescription}
                    </p>
                  </div>
                );
              })}
          </div>
          <button
            className="gap-2.5 self-start px-6 sm:px-8 py-4 sm:py-5 mt-6 text-base sm:text-2xl text-white rounded-lg bg-[#3E30CF] hover:from-[#5E3BEE] hover:to-[#B416FF]"
            onClick={(e) => handleScroll(e, "contact")}
          >
           Hire Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
