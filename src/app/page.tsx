import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import SlideMarquee from "@/src/components/SlideMarquee";
import HeroSection from "@/src/components/Hero";
import Education from "@/src/components/Education";
import Projects from "@/src/components/Projects";
import Footer from "@/src/components/Footer";
import Skills from "@/src/components/Skills";

const Page = () => {
  return (<>
    <StrictMode>
      <section id="home" className="scroll-mt-32 mt-20">
        <HeroSection />
      </section>
      <SlideMarquee />
      <section id="education" className="scroll-mt-32">
        <Education />
      </section>
      <section id="projects" className="scroll-mt-32">
        <Projects />
      </section>
      <section id="skills" className="scroll-mt-32">
        <Skills />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </StrictMode>
  </>)
 }
export default Page;
