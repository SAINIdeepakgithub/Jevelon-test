import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import TechStackStrip from "../components/TechStackStrip";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";

export default function HomePage() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  return (
    <>
      <Hero />
      <TechStackStrip />
      <Services />
      <About />
      <Contact />
    </>
  );
}