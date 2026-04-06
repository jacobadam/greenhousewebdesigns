"use client";

export default function FormButton({
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center h-11 px-5 text-sm font-semibold rounded w-36 transition-all duration-300";

  const variants = {
    primary:
      "bg-lightmode text-white border border-lightmode " +
      "hover:bg-lightmode/85 hover:-translate-y-0.5 hover:shadow-md " +
      "dark:bg-darkmode dark:border-darkmode " +
      "dark:hover:bg-darkmode/85 dark:hover:shadow-lg",

    secondary:
      "bg-transparent text-lightmode border border-lightmode " +
      "hover:bg-lightmode hover:text-white hover:-translate-y-0.5 hover:shadow-md " +
      "dark:text-darkmode dark:border-darkmode " +
      "dark:hover:bg-darkmode dark:hover:text-white dark:hover:shadow-lg",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
