import React from "react";

import Header from "../../components/HomePage/Header";
import Hero from "../../components/HomePage/Hero";
import Boxes from "../../components/HomePage/Boxes";
import ImageSelection from "../../components/HomePage/ImageSelection";
import WhySection from "../../components/HomePage/WhySection";
import WantSection from "../../components/HomePage/WantSection";
import Footer from "../../components/HomePage/Footer";

import { PageContainer } from "./styles";

export default function HomePage() {
  return (
    <>
      <PageContainer>
        <Header />
        <Hero />
        <Boxes />
        <ImageSelection />
        <WhySection />
        <WantSection />
        <Footer />
      </PageContainer>
    </>
  );
}
