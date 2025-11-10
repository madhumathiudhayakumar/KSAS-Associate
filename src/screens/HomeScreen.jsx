import React from "react";
import StatsSection from "../components/StatsSection";
import ServicesSection from "../components/ServicesSection";
import AboutUsSection from "../components/Aboutus";
import Header from "../components/Header";
import ScrollToTopButton from "../components/ScrollToTopButton";
import AutoScrollCarousel from "../components/AutoScrollCarousel";
import Services from "../components/Services";
import Users from "../components/Users";
import Aboutme from "../components/Aboutme";
import Contactus from "../components/Contactus";


const HomeScreen = () => {
  return (
    <div> 
    <Header/>
    <StatsSection/>
    <ServicesSection/>
    <AboutUsSection/>
    <Services/>
    <Users/>
    <Aboutme/>
    <Contactus/>
    {/* <AutoScrollCarousel/> */}
    <ScrollToTopButton/>
    </div>
    );
};
export default HomeScreen;