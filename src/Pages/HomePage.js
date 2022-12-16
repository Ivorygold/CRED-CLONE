import React from "react";
import Header from "../Commons/Header";
import AppRating from "../Components/AppRating";

import BrandsLove from "../Components/BrandsLove";
import CredAbout from "../Components/CredAbout";
import CredExperience from "../Components/CredExperience";
import CredSecurity from "../Components/CredSecurity";
import CredStory from "../Components/CredStory";
import FeelSpecial from "../Components/FeelSpecial";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import MobileScroll from "../Components/MobileScroll";
import ProductShowcase from "../Components/ProductShowcase";
import WindowPeak from "../Components/WindowPeak";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <BrandsLove />
      <CredExperience />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeak />
      </div>
      <CredSecurity />
      <CredStory />
      <AppRating />
      <CredAbout />
      <Footer />
    </div>
  );
};
export default HomePage;
