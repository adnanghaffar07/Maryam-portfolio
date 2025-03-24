"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleScroll = (e: any, targetId: any) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return (
    <div
      className="flex flex-col justify-center items-center xl:px-20 w-full bg-white h-[72px] sm:h-[90px] lg:h-[120px] shadow-[0px_5px_80px_rgba(0,0,0,0.1)] px-5 sm:px-10 max-md:max-w-full relative"
      ref={modalRef}
      id="header"
    >
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[1270px] max-md:max-w-full">
        <img
          src="/zeest-logo.png"
          alt="logo"
          className="h-[50px] md:h-[70px]"
        />

        <ul className=" gap-8 text-xl text-[#1C1E53] max-md:max-w-full hidden xl:flex">
          <li className="text-[#5E3BEE]">
            <a className="cursor-pointer font-medium">Home</a>
          </li>
          <li>
            <a
              onClick={(e) => handleScroll(e, "expertise")}
              className="hover:text-[#5E3BEE] cursor-pointer font-medium"
            >
              Tools & Expertise
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#5E3BEE] cursor-pointer font-medium"
              onClick={(e) => handleScroll(e, "about")}
            >
              About me
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#5E3BEE] cursor-pointer font-medium"
              onClick={(e) => handleScroll(e, "portfolio")}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#5E3BEE] cursor-pointer font-medium"
              onClick={(e) => handleScroll(e, "achievements")}
            >
              Achievements
            </a>
          </li>
        </ul>

        <button
          className="relative items-center justify-center w-[122px] h-[50px] text-lg font-medium rounded-lg p-[1px] bg-[#3E30CF] hidden xl:inline-flex"
          onClick={(e) => handleScroll(e, "contact")}
        >
          <span className="w-full h-full bg-white rounded-[7px] flex items-center justify-center hover:bg-[#3E30CF] group">
            <span className="bg-clip-text text-transparent bg-[#3E30CF] group-hover:text-white">
              Contact Me
            </span>
          </span>
        </button>

        {isModalOpen ? (
          <Image
            src={"/close-menu.svg"}
            alt="menu"
            width={40}
            height={40}
            className="block xl:hidden"
            onClick={toggleModal}
          />
        ) : (
          <Image
            src={"/hamberger.svg"}
            alt="menu"
            width={40}
            height={40}
            className="block xl:hidden"
            onClick={toggleModal}
          />
        )}
      </div>

      {isModalOpen && (
        <div className="absolute top-[72px] sm:top-[90px] lg:top-[120px] left-0 w-full h-[calc(100vh-72px)] sm:h-[calc(100vh-90px)] lg:h-[calc(100vh-120px)] block xl:hidden overflow-y-auto bg-white z-[999]">
          <ul className="text-[#282938] flex flex-col gap-6">
            <li
              className="mx-5 sm:mx-10 flex justify-between font-bold items-center border-b pb-6 border-[#D6D6D6]"
              onClick={() => setIsModalOpen(false)}
            >
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#B416FF] to-[#5E3BEE]">
                Home
              </p>
              <Image
                src={"/right-arrow.svg"}
                alt="right arrow"
                width={24}
                height={24}
              />
            </li>
            <li
              className="mx-5 sm:mx-10 flex justify-between font-bold items-center border-b pb-6 border-[#D6D6D6] text-[#282938]"
              onClick={(e) => {
                toggleModal();
                handleScroll(e, "achievements");
              }}
            >
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#282938] to-[#282938] hover:from-[#B416FF] hover:to-[#5E3BEE]">
                Achievements
              </p>
              <Image
                src={"/right-arrow.svg"}
                alt="right arrow"
                width={24}
                height={24}
              />
            </li>
            <li
              className="mx-5 sm:mx-10 flex justify-between font-bold items-center border-b pb-6 border-[#D6D6D6]"
              onClick={(e) => {
                toggleModal();
                handleScroll(e, "expertise");
              }}
            >
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#282938] to-[#282938] hover:from-[#B416FF] hover:to-[#5E3BEE]">
                Tools & Expertise
              </p>
              <Image
                src={"/right-arrow.svg"}
                alt="right arrow"
                width={24}
                height={24}
              />
            </li>
            <li
              className="mx-5 sm:mx-10 flex justify-between font-bold items-center border-b pb-6 border-[#D6D6D6]"
              onClick={(e) => {
                toggleModal();
                handleScroll(e, "about");
              }}
            >
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#282938] to-[#282938] hover:from-[#B416FF] hover:to-[#5E3BEE]">
                About me
              </p>
              <Image
                src={"/right-arrow.svg"}
                alt="right arrow"
                width={24}
                height={24}
              />
            </li>
            <li
              className="mx-5 sm:mx-10 flex justify-between font-bold items-center border-b pb-6 border-[#D6D6D6]"
              onClick={(e) => {
                toggleModal();
                handleScroll(e, "portfolio");
              }}
            >
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#282938] to-[#282938] hover:from-[#B416FF] hover:to-[#5E3BEE]">
                Portfolio
              </p>
              <Image
                src={"/right-arrow.svg"}
                alt="right arrow"
                width={24}
                height={24}
              />
            </li>
            <li
              className="mx-5 sm:mx-10 flex justify-between font-bold items-center"
              onClick={(e) => {
                toggleModal();
                handleScroll(e, "contact");
              }}
            >
              <p className="bg-clip-text text-transparent bg-[#3E30CF] hover:from-[#B416FF] hover:to-[#5E3BEE]">
                Contact me
              </p>
              <Image
                src={"/right-arrow.svg"}
                alt="right arrow"
                width={24}
                height={24}
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
