"use client";

import Link from "next/link";

export default function LinkButton({
  variant = "primary",
  width = "w-32",
  className = "",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center h-11 px-5 text-sm font-semibold rounded transition-all duration-300";

  const variants = {
    primary:
      "bg-lightmode text-white border border-lightmode " +
      "hover:bg-lightmode-secondary hover:-translate-y-0.5 hover:shadow-md " +
      "dark:bg-darkmode dark:border-darkmode " +
      "dark:hover:bg-darkmode-secondary dark:hover:shadow-lg",

    secondary:
      "bg-transparent text-lightmode border border-lightmode " +
      "hover:bg-lightmode-secondary hover:text-white hover:-translate-y-0.5 hover:shadow-md " +
      "dark:text-darkmode dark:border-darkmode " +
      "dark:hover:bg-darkmode-secondary dark:hover:text-white dark:hover:shadow-lg",
  };

  return (
    <Link
      className={`${base} ${variants[variant]} ${width} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
