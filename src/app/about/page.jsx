import React from "react";
import Image from "next/image";
import LinkButton from "../ui/LinkButton";

export default function About() {
  return (
    <section className="pt-28 lg:pt-4 relative bg-transparent grow">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto py-12 lg:py-24">
        <div className="w-full flex-col justify-start items-start gap-10 lg:gap-12 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <h1 className="text-zinc-800 dark:text-zinc-200 text-3xl md:text-4xl xl:text-5xl font-semibold leading-snug">
              About Us
            </h1>
            <p className="max-w-xl text-center text-zinc-900 dark:text-zinc-100 text-lg font-normal leading-relaxed">
              At Greenhouse Web Designs, we&apos;re passionate about building
              custom websites that help small businesses thrive online.
            </p>
          </div>
          <div className="justify-start items-center lg:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <Image
              className="mx-auto w-72 h-72 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full object-cover aspect-square"
              src="/jacobadam.webp"
              alt="Jacob Adam"
              width={1920}
              height={1279}
              priority
            />
            <div className="flex-col justify-center lg:items-start items-center gap-4 lg:gap-0 inline-flex">
              <div className="flex-col justify-center items-start gap-3 flex mb-8">
                <p className="text-zinc-800 dark:text-zinc-200 text-base font-normal leading-relaxed lg:text-start text-center">
                  I&apos;m Jacob, founder of Greenhouse Web Designs — a small
                  studio with a big mission: helping businesses grow with
                  high-quality, bespoke websites.
                </p>
                <p className="text-zinc-800 dark:text-zinc-200 text-base font-normal leading-relaxed lg:text-start text-center">
                  I began my career at SpareRoom, the UK&apos;s largest property
                  rental platform, before moving to Article, one of
                  Canada&apos;s top eCommerce brands. Along the way, I&apos;ve
                  gained a strong foundation in scalable, user-focused web
                  development — and I now bring that experience directly to
                  small business owners who want more than a cookie-cutter
                  solution.
                </p>
                <p className="text-zinc-800 dark:text-zinc-200 text-base font-normal leading-relaxed lg:text-start text-center">
                  At Greenhouse, I focus on creating websites that reflect your
                  goals and vision. Whether you&apos;re just getting started or
                  looking to refresh your online presence, I&apos;ll work
                  closely with you to develop a site that feels like an
                  extension of your brand — and helps convert visitors into
                  loyal customers.
                </p>
                <p className="text-zinc-800 dark:text-zinc-200 text-base font-normal leading-relaxed lg:text-start text-center">
                  If you&apos;re ready to grow your digital presence with a
                  website that works as hard as you do, I&apos;d love to hear
                  from you.
                </p>
              </div>
              <LinkButton href="/contact">Let&apos;s Talk</LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
