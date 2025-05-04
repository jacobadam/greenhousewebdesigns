"use client";

import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { BsFillCloudyFill, BsStarFill } from "react-icons/bs";

const DarkModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div
      className={
        "px-2 h-12 flex items-center justify-center transition-colors bg-transparent"
      }
    >
      <button
        onClick={() => {
          console.log("Theme toggled!");
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
        }}
        className={`p-1 w-16 rounded-full flex shadow-md relative bg-gradient-to-b ${
          resolvedTheme === "light"
            ? " justify-start from-indigo-600 to-indigo-400"
            : "justify-end from-blue-500 to-sky-300"
        }`}
      >
        <motion.div
          layout
          transition={{
            duration: 0.75,
            type: "spring",
          }}
          className="h-6 w-6 rounded-full overflow-hidden shadow-sm relative"
        >
          <div
            className={`absolute inset-0 ${
              resolvedTheme === "dark"
                ? "animate-pulse bg-gradient-to-tr from-amber-300 to-yellow-500 rounded-full"
                : "bg-slate-100"
            }`}
          />
          {resolvedTheme === "light" && <MoonSpots />}
          {resolvedTheme === "dark" && <SunCenter />}
        </motion.div>

        {resolvedTheme === "light" && <Stars />}
        {resolvedTheme === "dark" && <Clouds />}
      </button>
    </div>
  );
};

const SunCenter = () => (
  <div className="absolute inset-1 rounded-full bg-amber-300" />
);

const MoonSpots = () => (
  <>
    <motion.div
      initial={{ x: -2, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.15, duration: 0.35 }}
      className="w-1.5 h-1.5 rounded-full bg-slate-300 absolute right-1 bottom-0.5"
    />
    <motion.div
      initial={{ x: -2, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.35 }}
      className="w-1.5 h-1.5 rounded-full bg-slate-300 absolute left-0.5 bottom-2"
    />
    <motion.div
      initial={{ x: -2, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.25, duration: 0.35 }}
      className="w-1 h-1 rounded-full bg-slate-300 absolute right-1 top-1"
    />
  </>
);

const Stars = () => {
  return (
    <>
      <motion.span
        animate={{
          scale: [0.6, 0.8, 0.6],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeIn",
        }}
        className="text-slate-300 text-[0.6rem] absolute right-5 top-0.5"
      >
        <BsStarFill />
      </motion.span>
      <motion.span
        animate={{
          scale: [0.8, 0.6, 0.8],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "easeIn",
        }}
        style={{ rotate: "-45deg" }}
        className="text-slate-300 text-sm absolute right-2 top-1"
      >
        <BsStarFill />
      </motion.span>
      <motion.span
        animate={{
          scale: [0.8, 0.4, 0.8],
          opacity: [0.8, 0.4, 0.8],
        }}
        style={{ rotate: "45deg" }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: "easeIn",
        }}
        className="text-slate-300 absolute right-4 top-4"
      >
        <BsStarFill />
      </motion.span>
    </>
  );
};

const Clouds = () => {
  return (
    <>
      <motion.span
        animate={{ x: [-10, -7.5, -5, -2.5, 0], opacity: [0, 1, 0.75, 1, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 0.25,
        }}
        className="text-white text-[0.6rem] absolute left-5 top-0.5"
      >
        <BsFillCloudyFill />
      </motion.span>
      <motion.span
        animate={{ x: [-5, 0, 5, 10, 5, 0], opacity: [0, 1, 0.75, 1, 0.5, 0] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          delay: 0.5,
        }}
        className="text-white text-sm absolute left-2 top-2"
      >
        <BsFillCloudyFill />
      </motion.span>
      <motion.span
        animate={{ x: [-2.5, 0, 2.5, 5, 2.5], opacity: [0, 1, 0.75, 1, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          delay: 0.75,
        }}
        className="text-white absolute text-[0.6rem] left-7 top-2"
      >
        <BsFillCloudyFill />
      </motion.span>
    </>
  );
};

export default DarkModeToggle;
