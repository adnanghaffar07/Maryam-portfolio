import "./globals.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import HireMe from "./components/HireMe";
import Services from "./components/Services";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import LifeStyle from "./components/LifeStyle";
import Expertise from "./components/Expertise";
import ToolLogosSection from "./components/ToolLogosSection";
import RecentProjects from "./components/RecentProjects";
import Testimonials from "./components/Testimonials";
import { client } from "@/sanity/lib/client";

async function getData() {
  const query = `*[_type=='homepage'][0]`;
  try {
    const fetchData = await client.fetch(query);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
export default async function Home() {
  const fetchedData = await getData();
  // console.log("fetchedData:",fetchedData)

  return (
    <>
      <Header />
      <HeroSection data={fetchedData?.header} />
      <ToolLogosSection data={fetchedData?.toolsLogoSection?.logoArray} />
      <Expertise data={fetchedData?.toolsAndExpertise} />
      <AboutMe data={fetchedData?.aboutMe} />
      <HireMe/>
      <RecentProjects data={fetchedData?.recentProjects} />
      {/* <LifeStyle data={fetchedData?.lifeStyle} /> */}
      <Services data={fetchedData?.servicesHightlight} />
      <Testimonials/>
      <Achievements data={fetchedData?.achievements} />
      <ContactSection data={fetchedData?.formSection} />
      <Footer />
    </>
  );
}
