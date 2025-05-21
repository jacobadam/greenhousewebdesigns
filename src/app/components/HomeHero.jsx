import { motion } from "motion/react";
import Image from "next/image";

export default function HomepageHero() {
  const text = "Web Designs That Grow With Your Business";
  const words = text.split(" ");
  return (
    <section
      className="h-screen w-screen sm:pb-20 bg-transparent"
      style={{
        paddingTop: "clamp(8rem, 10vw, 8rem)",
        minHeight: "calc(100vh - clamp(4rem, 10vw, 8rem))",
      }}
    >
      <div className="h-full flex flex-col lg:flex-row items-center justify-center relative max-w-screen-xl mx-auto px-4 pb-16 md:pb-0 md:px-8">
        <div className="flex flex-col items-center justify-center px-4 text-center md:max-w-xl mx-auto">
          <motion.h1
            className="flex flex-row flex-wrap justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black dark:text-white font-extrabold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="flex flex-row mr-2">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: (wordIndex * 5 + letterIndex) / 20,
                    }}
                    className={`${
                      word === "Grow"
                        ? "text-lightmode dark:text-darkmode"
                        : "text-black dark:text-white"
                    }`}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>
          <p className="mt-4 text-zinc-900 dark:text-zinc-100 font-medium">
            By focusing on clean, responsive design and search engine
            optimization, I build sites that help businesses thrive.
          </p>
          <div className="flex items-center gap-x-4 mt-8 lg:mt-4">
            <a
              href="/services"
              aria-label="Go to services"
              className="flex justify-center items-center relative h-[50px] w-40 overflow-hidden border border-lightmode dark:border-darkmode bg-lightmode dark:bg-darkmode px-3 text-zinc-100 dark:text-black dark:hover:text-white hover:shadow-2xl before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-lightmode dark:before:bg-darkmode before:transition-all before:duration-500 hover:text-white hover:shadow-lightmode dark:hover:shadow-darkmode hover:before:left-0 hover:before:w-full rounded-full font-semibold mt-4"
            >
              <span className="relative z-3">Services</span>
            </a>
            <a
              href="/contact"
              aria-label="Go to contact page"
              className="flex justify-center items-center relative h-[50px] w-40 overflow-hidden border dark:border-darkmode border-lightmode dark:hover:border-darkmode bg-transparent px-3 dark:text-darkmode text-lightmode dark:hover:text-white hover:shadow-2xl before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-lightmode dark:before:bg-darkmode before:transition-all before:duration-300 hover:text-white hover:shadow-lightmode dark:hover:shadow-darkmode hover:before:left-0 hover:before:w-full rounded-full font-semibold mt-4"
            >
              <span className="relative z-3">Get a Quote</span>
            </a>
          </div>
        </div>

        <div className="order-first lg:order-none mb-12 lg:mb-0 lg:ml-12 flex justify-center relative z-2">
          <Image
            src="hero-image.svg"
            className="w-3/4 md:w-2/4 lg:w-full dark:hidden"
            alt="A graphic of a laptop and a mobile device"
            width="500"
            height="287"
            priority
          />
          <Image
            src="hero-image-dark.svg"
            className="w-3/4 md:w-2/4 lg:w-full hidden dark:block"
            alt="A graphic of a laptop and a mobile device"
            width="500"
            height="287"
            priority
          />
        </div>
      </div>
    </section>
  );
}
