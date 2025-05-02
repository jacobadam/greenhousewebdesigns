"use client";

import HomeHero from "./components/HomeHero";
import HomeServices from "./components/HomeServices.jsx";
import HomeBenefits from "./components/HomeBenefits.jsx";
import HomeContact from "./components/HomeContact.jsx";
import HomePortfolio from "./components/HomePortfolio.jsx";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Home() {
  return (
    <div>
      <ParallaxComponent>
        <HomeHero />
      </ParallaxComponent>
      <ParallaxComponent>
        <HomeServices />
      </ParallaxComponent>
      <ParallaxComponent>
        <HomeBenefits />
      </ParallaxComponent>
      <ParallaxComponent>
        <HomePortfolio />
      </ParallaxComponent>
      <ParallaxComponent>
        <HomeContact />
      </ParallaxComponent>
    </div>
  );
}

const ParallaxComponent = ({ children }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 0]);

  return (
    <div className="">
      <motion.div
        ref={targetRef}
        style={{
          scale,
          opacity,

          top: 0,
        }}
        className="sticky z-0 overflow-hidden flex items-center justify-center"
      >
        {children}
      </motion.div>
    </div>
  );
};
