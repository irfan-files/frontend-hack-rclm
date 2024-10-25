import React from "react";
import MainContent from "../components/pagesComponents/MainContent";
import FeatureSection from "../components/pagesComponents/FeatureSection";
import HowItWorks from "../components/pagesComponents/HowItWorks";
import RoadmapSection from "../components/pagesComponents/RoadmapSection";

const LandingPage = () => {
  return (
    <div>
      <MainContent />
      <FeatureSection />
      <HowItWorks />
      <RoadmapSection />
    </div>
  );
};

export default LandingPage;
