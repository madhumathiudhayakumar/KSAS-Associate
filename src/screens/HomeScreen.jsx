import React from "react";
import StatsSection from "../components/StatsSection";
import AboutUsSection from "../components/Aboutus";
import Header from "../components/Header";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Services from "../components/Services";
import Aboutme from "../components/Aboutme";
import Contactus from "../components/Contactus";
import BooksCarousel from "../components/BooksCarousel";
import ServiceAnalyticSection from "../components/ServiceAnalyticSection";


const HomeScreen = () => {
  return (
    <div>
      <section id="header" className="scroll-mt-38">
        <Header />
      </section>
      <section id="stats">
        <StatsSection />
      </section>
      <ServiceAnalyticSection />
      <section id="aboutus" className="scroll-mt-24">
        <AboutUsSection />
      </section>
      <section id="services" className="scroll-mt-24">
        <Services />
      </section>
      <BooksCarousel />
      <section id="aboutme" className="scroll-mt-24">
        <Aboutme />
      </section>
      <section id="contactus" className="scroll-mt-24">
        <Contactus />
      </section>
      <ScrollToTopButton />
    </div>
  );
};
export default HomeScreen;