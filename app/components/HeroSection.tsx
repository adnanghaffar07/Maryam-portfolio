import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = ({ data }: { data: any }) => {
  return (
    <section className="bg-[#F5FCFF]">
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-4 lg:gap-10 xl:gap-[60px] pb-4 sm:pb-[100px] md:pb-[134px] max-w-[1270px] mx-auto">
        <div className="flex flex-col mt-10 lg:mt-[93px] justify-center items-center relative">
          <div className="flex flex-col max-w-full font-bold justify-center">
            <p className="text-base sm:text-2xl xl:text-2xl 2xl:text-[26px] text-[#282938] bg-clip-text bg-[linear-gradient(274deg,#5E3BEE_44.65%,#B416FF_97.09%)]">
            Hey, I am
              <span className="bg-clip-text text-transparent bg-[#3E30CF] ms-2">
              Maryam
              </span>
            </p>
            <div className="flex flex-col mt-4 w-full text-3xl sm:text-[36px] lg:text-[46px] xl:text-[56px] leading-tight justify-center">
              <p className="bg-clip-text text-transparent bg-[#3E30CF] max-md:max-w-full">
              FULL STACK
              </p>
              <div className="text-gray-800">
                <span className="">And </span>
                <span className="bg-clip-text text-transparent bg-[#3E30CF]">
                AUTOMATION 
                </span>
              </div>
              <div className="text-gray-800">Developer</div>
            </div>
            <p className="mt-4 text-base sm:text-lg lg:text-lg xl:text-2xl leading-6 sm:leading-8 text-[#1C1E53] font-medium max-w-[400px] lg:max-w-[504px] xl:max-w-[602px] justify-center items-center">
            Utilize a decade of full-stack development experience to create cutting-edge, high-performance technical solutions, ensuring smooth execution, scalability, and ongoing enhancement.
            </p>
          </div>

          <div className="flex gap-4 sm:gap-6 items-center self-start mt-8 ">
            {data?.firstButton && (
              <Link
                href={data?.firstButton?.buttonLink}
                target="_blank"
                className="text-white rounded-lg bg-[#3E30CF] w-[190px] lg:w-[200px] xl:w-[255px] h-[56px] sm:h-[63px] lg:h-[63px] xl:h-[73px] max-md:px-5 text-[22px] flex items-center justify-center text-base lg:text-xl xl:text-[22px] group transition-transform duration-300 hover:bg-[linear-gradient(274deg,#B416FF_44.65%,#5E3BEE_97.09%)]"
              >
                Upwork Top Rated
              </Link>
            )}

            {data?.secondButton && (
              <Link
                href={data?.secondButton.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative items-center justify-center w-[164px] sm:w-[180px] lg:w-[225px] xl:w-[255px] h-[58px] sm:h-[63px] lg:h-[63px] xl:h-[73px] lg:text-xl xl:text-2xl font-medium rounded-lg p-[1px] bg-[#3E30CF] px-[1px] flex"
              >
                <span className="w-full h-full bg-[#F5FCFF] hover:bg-[#CECCFB] rounded-[7px] flex items-center justify-center">
                  <span className="bg-clip-text text-transparent bg-[#3E30CF] text-base lg:text-[22px] py-1">
              Schedule Meeting
                  </span>
                </span>
              </Link>
            )}
          </div>
        </div>

        <div className="relative mt-6 xl:mt-16">
            <Image
              src="/intro.png"
              alt="My Introduction"
              width={578}
              height={514}
              priority={true}
              className="w-full sm:w-[578px] lg:w-[410px] xl:w-[520px] 2xl:w-[578px] px-4 sm:px-0"
            />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
