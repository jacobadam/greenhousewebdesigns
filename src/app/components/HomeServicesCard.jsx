import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const services = [
  {
    title: "Mobile-First Design",
    description:
      "Optimized for every device, starting with mobile — delivering fast load times, seamless navigation, and a user experience that drives engagement from the first tap.",
    svgPath: "/custom-website.svg",
    alt: "Code icon",
  },
  {
    title: "Responsive Design",
    description:
      "Flexible layouts that respond smoothly to all screen sizes — ensuring visual consistency, intuitive interaction, and a great experience on every type of device.",
    svgPath: "/responsive-design.svg",
    alt: "Devices icon",
  },
  {
    title: "Optimized Page Speed",
    description:
      "Websites designed to load fast and run smoothly — reducing bounce rates, keeping visitors engaged, and improving overall performance across all major devices.",
    svgPath: "/performance-optimization.svg",
    alt: "Chart icon",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Strategic SEO implementation that improves visibility — boosting rankings in search results, increasing organic traffic, and helping your site reach more users.",
    svgPath: "/seo.svg",
    alt: "SEO icon",
  },
];

export default function HomeServicesCard() {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 py-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-zinc-300 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="rounded-2xl h-full w-full p-2 overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-300/20 dark:from-slate-800 dark:to-slate-800/20 border border-transparent dark:group-hover:border-slate-700 relative z-50">
              <div className="relative z-50">
                <div className="p-4 text-center lg:text-left">
                  <div className="inline-block rounded-lg p-2">
                    <img
                      className="w-11 h-11 object-contain bg-white p-1 rounded"
                      key={index}
                      src={service.svgPath}
                      alt={service.alt}
                      aria-hidden="true"
                      width="32"
                      height="32"
                    />
                  </div>
                  <h2 className="text-zinc-900 dark:text-zinc-200 font-bold tracking-wide mt-4 text-lg">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-zinc-800 dark:text-zinc-200 tracking-wide leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
