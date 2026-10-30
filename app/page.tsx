"use client";

import { motion } from "framer-motion";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import StatsPreview from "@/components/landing/StatsPreview";
import HowItWorks from "@/components/landing/HowItWorks";
import CtaBand from "@/components/landing/CtaBand";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Features />
      <StatsPreview />
      <HowItWorks />
      <CtaBand />
    </motion.div>
  );
};

export default Home;
