import React from "react";
import StatsSection from "../components/StatsSection";
import ServicesSection from "../components/ServicesSection";
import AboutUsSection from "../components/Aboutus";
import Header from "../components/Header";
import ScrollToTopButton from "../components/ScrollToTopButton";
import AutoScrollCarousel from "../components/AutoScrollCarousel";


const HomeScreen = () => {
  return (
    <div> 
    <Header/>
    <StatsSection/>
    <ServicesSection/>
    <AboutUsSection/>
    <AutoScrollCarousel/>
    <ScrollToTopButton/>
    </div>
    );
};
export default HomeScreen;