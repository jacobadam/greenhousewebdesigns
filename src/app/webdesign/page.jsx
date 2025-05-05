"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";

export default function WebDesign() {
  const benefitsOfWebDesign = [
    {
      reason: "Enhanced User Experience (UX)",
      benefit:
        "Intuitive navigation, clear layouts, and engaging interactions make it easy and enjoyable for visitors to use your website. This leads to increased satisfaction, longer engagement times, and a higher likelihood of return visits.",
    },
    {
      reason: "Stronger Brand Identity and Trust",
      benefit:
        "A professionally designed website with consistent branding elements (colors, fonts, visuals) builds credibility and reinforces your brand identity. This helps visitors perceive your business as trustworthy and authoritative.",
    },
    {
      reason: "Improved Search Engine Optimization (SEO)",
      benefit:
        "Well-structured websites with clean code, fast loading times, and mobile responsiveness are favored by search engines. Good web design practices contribute significantly to higher search rankings, driving organic traffic to your site.",
    },
    {
      reason: "Increased Conversions and Goal Achievement",
      benefit:
        "Strategically designed call-to-actions, clear pathways for users, and optimized forms can significantly improve conversion rates, whether that's sales, leads, sign-ups, or any other defined goal for your website.",
    },
    {
      reason: "Better Performance and Accessibility",
      benefit:
        "A well-designed website is not only visually appealing but also performs efficiently across different devices and is accessible to users with disabilities. This ensures a broader reach and a positive experience for everyone.",
    },
  ];

  return (
    <>
      <div className="relative bg-transparent">
        <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-12 lg:gap-32 px-4 md:grid-cols-2 md:mb-8">
          <div
            className="flex h-fit w-full flex-col justify-center py-12 md:sticky md:top-0 md:h-screen text-center md:text-left"
            style={{
              paddingTop: "clamp(8rem, 10vw, 8rem)",
              minHeight: "calc(100vh - clamp(4rem, 10vw, 8rem))",
            }}
          >
            <h1 className="mb-4 text-2xl lg:text-3xl font-semibold leading-tight text-black dark:text-white">
              What Is Web Design And What Are The Benefits?
            </h1>
            <p className="text-lg text-gray-800 dark:text-zinc-100">
              More than just making websites look good, web design is about
              strategically planning and building online experiences that are
              user-friendly, engaging, and achieve specific goals.
            </p>
            <img
              src="/webdesign.webp"
              alt="web design"
              className="rounded-2xl mt-8"
            ></img>
          </div>
          <BenefitsCarousel benefits={benefitsOfWebDesign} />
        </div>
      </div>
    </>
  );
}

const BenefitsCarousel = ({ benefits }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div className="relative w-full z-5">
      <div className="sticky top-0 z-2 hidden h-36 w-full bg-transparent md:block" />

      <div ref={ref} className="relative z-0 flex flex-col gap-6">
        {benefits.map((benefit, index) => (
          <BenefitItem
            key={index}
            scrollYProgress={scrollYProgress}
            position={index + 1}
            numItems={benefits.length}
            reason={benefit.reason}
            benefitText={benefit.benefit}
          />
        ))}
      </div>

      <div className="h-4 w-full md:h-48" />
    </div>
  );
};

const BenefitItem = ({
  scrollYProgress,
  position,
  numItems,
  reason,
  benefitText,
}) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
      }}
      className="grid py-20 px-4 w-full shrink-0 rounded-2xl border border-black dark:border-white bg-zinc-100/50 dark:bg-zinc-950/30"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <span className="text-xl font-semibold text-[#71b468] dark:text-indigo-500 mb-2">
          {reason}
        </span>
        <p className="text-lg text-zinc-800 dark:text-neutral-400">
          {benefitText}
        </p>
      </div>
    </motion.div>
  );
};
