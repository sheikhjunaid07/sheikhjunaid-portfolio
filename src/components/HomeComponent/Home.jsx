import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";

import About from "../AboutComponent/About";
import Contact from "../ContactComponent/Contact";
import Footer from "../FooterComponent/Footer";
import Hero from "../HeroComponent/Hero";
import PortfolioSec from "../PortfolioComponent/PortfolioSec";
import Resume from "../ResumeComponent/Resume";
import Services from "../ServicesComponent/Services";
import Skills from "../SkillsComponent/Skills";
import Stats from "../StatsComponent/Stats";
import Testimonial from "../TestimonialComponent/Testimonial";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <main className="main">
        <Hero />
        <About />
        {/* <Stats /> */}
        <Skills />
        <Resume />
        <PortfolioSec />
        <Services />
        {/* <Testimonial /> */}
        <Contact />
      </main>
      <Footer />
      {/* Scroll Top */}
      <a
        href="/"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default Home;
