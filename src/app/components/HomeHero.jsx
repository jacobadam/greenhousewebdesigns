"use client";

import { motion } from "motion/react";
import Image from "next/image";
import LinkButton from "../ui/LinkButton";

export default function HomepageHero() {
  const text = "Web Designs That Grow With Your Business";
  const words = text.split(" ");

  return (
    <section className="w-full min-h-screen flex items-center bg-transparent pt-28 lg:pt-8">
      <div className="w-full max-w-7xl mx-auto px-4 py-12 lg:py-40 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="w-full text-center lg:text-left">
            <motion.h1
              className="block w-full text-4xl sm:text-6xl md:text-7xl lg:text-6xl text-foreground font-extrabold leading-[1.1] tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className="inline-block whitespace-nowrap mr-[0.2em]"
                >
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.25,
                        delay: (wordIndex * 5 + letterIndex) / 25,
                      }}
                      className={
                        word === "Grow"
                          ? "text-lightmode dark:text-darkmode"
                          : "text-foreground"
                      }
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h1>

            <div className="flex flex-col items-center lg:items-start w-full">
              <p className="mt-6 max-w-2xl text-foreground/70 text-lg md:text-xl leading-relaxed">
                By focusing on clean, responsive design and search engine
                optimization, I build sites that help businesses thrive.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto">
                <LinkButton href="/services" width="w-full sm:w-48 lg:w-36">
                  Services
                </LinkButton>
                <LinkButton
                  href="/contact"
                  width="w-full sm:w-48 lg:w-36"
                  variant="secondary"
                >
                  Get a Quote
                </LinkButton>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg lg:max-w-xl opacity-95">
              <Image
                src="hero-image.svg"
                className="w-full h-auto dark:hidden"
                alt="A graphic of a laptop and a mobile device"
                width="500"
                height="287"
                priority
              />
              <Image
                src="hero-image-dark.svg"
                className="w-full h-auto hidden dark:block"
                alt="A graphic of a laptop and a mobile device"
                width="500"
                height="287"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
