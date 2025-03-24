import React from "react";

const AboutMe = ({ data }: { data: any }) => {
  return (
    <section className="bg-neutral-50" id="about">
      <div className="flex flex-col-reverse lg:flex-row gap-10 2xl:gap-[86px] items-center py-6 sm:py-24 max-md:px-5 max-w-[1270px] mx-auto justify-center">
        <div>
          {data?.image && (
            <img
              src="/about.png"
              alt="About me"
              className="h-[485px] xl:h-[635px]"
            />
          )}
        </div>
        <div className="flex flex-col">
          <div>
            <h2 className="text-base sm:text-xl font-semibold text-[#282938]">
              How I Grow My Business
            </h2>
            <p className="mt-2 text-2xl sm:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-[#3E30CF] w-fit">
              About Me
            </p>
          </div>
          <div className="max-w-[450px] xl:max-w-[616px] text-[#1C1E53]">
            <p className="mt-6 text-base sm:text-lg leading-7">
              With more than a decade of full-stack development experience, I specialize in creating scalable, efficient web applications that offer seamless user experiences. My skill set covers both front-end and back-end technologies, including React.js, Next.js, TypeScript, Node.js, among others. I excel in dynamic settings, addressing complex technical challenges and delivering high-quality solutions that align with client objectives.
              <br /> <br />
              Over the course of my career, I have contributed to a variety of projects—from e-commerce platforms to AI-powered applications—ensuring that every solution is technically robust, cost-effective, and aligned with overarching business goals. My passion for continuous learning drives me to stay current with the latest industry trends and innovations, enabling me to offer cutting-edge solutions.
              <br /> <br />
              I am eager to explore new opportunities for collaboration on exciting projects and to contribute to the creation of impactful, high-performance applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
