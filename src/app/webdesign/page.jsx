"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import Image from "next/image";

export default function WebDesign() {
  const benefitsOfWebDesign = [
    {
      reason: "Enhanced User Experience",
      benefit:
        "Intuitive navigation, clear layouts, and engaging interactions make it easy and enjoyable for visitors to use your website. This leads to increased satisfaction, better engagement, and a higher likelihood of return visits.",
    },
    {
      reason: "Stronger Brand Identity",
      benefit:
        "More than a marketing tool, your website is a key driver of customer trust. A professional, polished website with consistent visual elements builds credibility and reinforces your brand identity.",
    },
    {
      reason: "Improved Search Engine Optimization (SEO)",
      benefit:
        "Well-structured websites with clean code, fast loading times, and mobile responsiveness are favored by search engines. Good web design practices contribute significantly to higher Google rankings, driving organic traffic to your site.",
    },
    {
      reason: "Increased Conversions",
      benefit:
        "Strategically designed call-to-actions, clear user pathways, and optimized forms can significantly improve conversion rates, whether that's sales, leads, sign-ups, or any other defined goal for your website.",
    },
    {
      reason: "Greater Accessibility",
      benefit:
        "Thoughtful design choices, clear content structure, and adherence to accessibility standards make your website usable for everyone, including people with disabilities. This creates a more inclusive experience and widens your reach.",
    },
  ];

  return (
    <>
      <div className="relative bg-transparent h-fit">
        <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-0 md:gap-8 lg:gap-12 px-4 md:grid-cols-2 md:mb-8">
          <div
            className="flex h-fit w-full flex-col justify-center py-12 md:sticky md:top-0 text-center md:max-h-screen"
            style={{
              paddingTop: "clamp(8rem, 10vw, 8rem)",
            }}
          >
            <h1 className="mb-4 lg:mt-8 text-lg sm:text-2xl lg:text-3xl font-semibold leading-tight text-black dark:text-white text-center">
              What Is Web Design And What Are The Benefits?
            </h1>
            <p className="text-base sm:text-lg text-zinc-900 dark:text-zinc-100 text-center md:mb-4">
              Your website is a critical engine for growth. More than just
              making websites look good, web design is about strategically
              planning and building online experiences that are user-friendly,
              engaging, and achieve specific goals.
            </p>
            <Image
              src="/webdesign.webp"
              alt="web design"
              className="rounded-2xl mt-4 w-[768px] h-[320px] object-cover"
              width={768}
              height={200}
              priority
            ></Image>
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
      <div className="sticky top-0 z-2 hidden h-36 bg-transparent md:block" />

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
      className="grid h-full py-16 px-4 w-full shrink-0 rounded-2xl border border-black dark:border-white bg-zinc-100/50 dark:bg-zinc-950/30"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <span className="lg:text-2xl font-semibold text-[#71b468] dark:text-indigo-500 mb-6">
          {reason}
        </span>
        <p className="text-base md:text-lg text-zinc-800 dark:text-zinc-200">
          {benefitText}
        </p>
      </div>
    </motion.div>
  );
};
