"use client";

import Link from "next/link";

export default function LinkButton({
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center h-11 px-5 text-sm font-semibold transition-colors duration-200 rounded w-32";

  const variants = {
    primary:
      "bg-lightmode text-background border border-lightmode " +
      "hover:bg-lightmode/90 " +
      "dark:bg-darkmode dark:text-background dark:border-darkmode " +
      "dark:hover:bg-darkmode/90",

    secondary:
      "bg-background text-lightmode border border-lightmode " +
      "hover:bg-lightmode hover:text-background " +
      "dark:text-darkmode dark:border-darkmode " +
      "dark:hover:bg-darkmode dark:hover:text-background",
  };

  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
