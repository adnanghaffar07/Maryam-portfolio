"use client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const RecentProjects = ({ data }: { data: any }) => {
  const [selected, setSelected] = useState("All Projects");
  const [projectsArrayLimit, setProjectsArrayLimit] = useState(6);
  const [selectedCategoryArray, setSelectedCategoryArray] = useState<any>([]);
  const [showingProjectsArray, setShowingProjectsArray] = useState<any>([]);

  useEffect(() => {
    if (selected === "All Projects") {
      setShowingProjectsArray(data.projectsArray.slice(0, 6));
      setSelectedCategoryArray(data.projectsArray);
    }
  }, [selected, data.projectsArray]);

  const handleClick = (obj: any) => {
    setProjectsArrayLimit(6);
    setSelected(obj.buttonText);
    if (obj.category === "all") {
      setShowingProjectsArray(data.projectsArray.slice(0, 6));
      setSelectedCategoryArray(data.projectsArray);
    } else {
      const filteredProjects = data.projectsArray.filter((project: any) =>
        project.categories.includes(obj.category)
      );
      setShowingProjectsArray(filteredProjects.slice(0, 6));
      setSelectedCategoryArray(filteredProjects);
    }
  };

  useEffect(() => {
    setShowingProjectsArray(selectedCategoryArray.slice(0, projectsArrayLimit));
  }, [projectsArrayLimit, selectedCategoryArray]);

  const handleShowMoreClick = () => {
    setProjectsArrayLimit((prev) => prev + 3);
  };

  return (
    <section className="max-w-[1412px] mx-auto"  id="portfolio">
      <div className="flex flex-col px-1 sm:px-5 py-8 md:py-12 w-full max-md:max-w-full items-center justify-center">
        <div className="flex flex-col items-start w-full max-md:max-w-full">
          <div className="flex flex-col justify-center max-w-full w-[768px]">
            <p className="self-start text-base sm:text-xl font-semibold text-center text-[#282938]">
            Project Highlights
            </p>
            <div className="flex flex-col mt-2 md:mt-4 w-full text-5xl font-bold leading-tight max-md:max-w-full max-md:text-4xl">
              <p className="text-2xl sm:text-4xl md:text-5xl w-fit bg-clip-text text-transparent bg-[#3E30CF] pb-1">
              Recent Projects
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 md:gap-5 items-center mt-4 md:mt-8 w-full text-lg font-medium leading-tight max-md:max-w-full">
            {data.buttonsArray.map((tool: any, index: number) => (
              <button
                className={`rounded-lg p-[1.5px] w-fit bg-[#3E30CF] ${
                  selected === tool.buttonText
                    ? ""
                    : "bg-white border-1 border-transparent"
                } hover:bg-[#3E30CF] transition-all duration-300`}
                key={index}
                onClick={() => handleClick(tool)}
              >
                <p
                  className={`px-[10px] py-1.5 md:py-[13px] rounded-[7px] transition-all duration-300 ${
                    selected === tool.buttonText
                      ? "bg-transparent text-white"
                      : "bg-white hover:bg-transparent"
                  } group`}
                >
                  <span
                    className={`text-xs md:text-lg bg-clip-text text-transparent bg-[#3E30CF] transition-all duration-300 ${
                      selected === tool.buttonText ? "text-white" : ""
                    } group-hover:text-white`}
                  >
                    {tool.buttonText}
                  </span>
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-7 sm:gap-10 mt-8 md:mt-16">
          {showingProjectsArray.length !== 0 &&
            showingProjectsArray.map((item: any, index: number) => (
              <div
                key={index}
                className="relative w-full cursor-pointer group overflow-hidden"
              >
                {/* <Link href={`/case-studies/${item?.url}`}> */}
                {/* {item?.cardImage && ( */}
                {item.image && (
                  <Image
                    width={454}
                    height={300}
                    className="w-full aspect-[1.52] max-w-[360px] sm:max-w-[410px] sm:mb-2"
                    src={urlFor(item.image).url()}
                    alt={item.image.alt}
                  />
                )}
                {/* )} */}
                <div
                  className={
                    "absolute inset-0 flex items-center justify-center text-center p-4 transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 rounded-3xl"
                  }
                  style={{
                    backgroundColor: "#5E3BEE",
                  }}
                >
                  <p className="text-white">{item.description}</p>
                </div>
                {/* </Link> */}
              </div>
            ))}
        </div>

        {selectedCategoryArray.length > 6 &&
          projectsArrayLimit < selectedCategoryArray.length && (
            <button
              className="items-center justify-center w-[122px] h-[50px] text-lg font-medium rounded-lg p-[1.5px] bg-[#3E30CF] mt-8 md:mt-16"
              onClick={() => {
                handleShowMoreClick();
              }}
            >
              <span className="w-full h-full bg-white rounded-[7px] flex items-center justify-center hover:bg-[#3E30CF] group">
                <span className="bg-clip-text text-transparent bg-[#3E30CF] group-hover:text-white">
                  Show More
                </span>
              </span>
            </button>
          )}
      </div>
    </section>
  );
};

export default RecentProjects;
