import * as React from "react";
import { useRef } from "react";
import { Footer, MainNavbar } from "~src/components";
import { AboutMeSection } from "../components";
import { useOnScrollAnimation } from "~src/hooks";
import { Helmet } from "react-helmet";

export const About = () => {
  const blogSectionRef = useRef<HTMLElement | null>(null);
  useOnScrollAnimation({ ref: blogSectionRef });
  return (
    <>
      <Helmet>
        <title>Landon McKell - About</title>
        <meta
          name="description"
          content="Learn more about Landon McKell, a skilled web developer with a passion for creating seamless digital experiences. Explore his journey, skills, and what drives his work in web development."
        />
        <meta
          name="keywords"
          content="Landon McKell, about Landon McKell, web developer biography, software engineer, web development skills, developer journey, professional background"
        />
      </Helmet>
      <MainNavbar about />
      <section
        id="about-me-section"
        className="my-10 md:my-20 animate__animated animate__fadeIn"
      >
        <AboutMeSection />
      </section>
      <Footer />
    </>
  );
};
