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
import OurPhilosophy from "../components/OurPhilosophy";
import RecommendedMovies from "../components/RecommedndedMovies";
import TedTalks from "../components/TedTalks";
import RecommendedDocumentaries from "../components/Documentaries";

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
      <section id="bookscarousel" className="scroll-mt-24">
        <BooksCarousel />
      </section>
      <section id="recommendedmovies" className="scroll-mt-24">
        <RecommendedMovies />
      </section>
      <section>
        <TedTalks />
      </section>
      <section id="ourphilosophy" className="scroll-mt-24">
        <OurPhilosophy />
      </section>
      <section id="contactus" className="scroll-mt-24">
        <Contactus />
      </section>
      <section id="aboutme" className="scroll-mt-24">
        <Aboutme />
      </section>
      <section id="services" className="scroll-mt-24">
        <RecommendedDocumentaries />
      </section>
      <ScrollToTopButton />
    </div>
  );
};
export default HomeScreen;
