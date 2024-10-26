import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MainContent from "../components/pagesComponents/MainContent";
import FeatureSection from "../components/pagesComponents/FeatureSection";
import HowItWorks from "../components/pagesComponents/HowItWorks";
import RoadmapSection from "../components/pagesComponents/RoadmapSection";

const LandingPage = () => {
  // Variants buat animasi masuk
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Custom Hook buat Intersection Observer
  const [mainRef, mainInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [featureRef, featureInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [howItWorksRef, howItWorksInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [roadmapRef, roadmapInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="landing-container">
      <motion.div
        ref={mainRef}
        initial="hidden"
        animate={mainInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <MainContent />
      </motion.div>

      <motion.div
        ref={featureRef}
        initial="hidden"
        animate={featureInView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ delay: 0.2 }}
      >
        <FeatureSection />
      </motion.div>

      <motion.div
        ref={howItWorksRef}
        initial="hidden"
        animate={howItWorksInView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ delay: 0.4 }}
      >
        <HowItWorks />
      </motion.div>

      <motion.div
        ref={roadmapRef}
        initial="hidden"
        animate={roadmapInView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ delay: 0.6 }}
      >
        <RoadmapSection />
      </motion.div>
    </div>
  );
};

export default LandingPage;
