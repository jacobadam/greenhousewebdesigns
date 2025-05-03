"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import HamburgerMenu from "./HamburgerMenu";

export default function NavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/webdesign", label: "Web Design" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`bg-black fixed top-0 z-20 overflow-hidden border-white/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur px-4 transition-all duration-300 w-full md:w-auto ${
        isScrolled
          ? "left-0 right-0"
          : "mx-auto md:left-6 md:right-6 md:top-6 md:rounded-2xl"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="w-36 p-2" onClick={scrollToTop}>
          <img src="/greenhouse-logo.png" alt="Greenhouse Web Designs Logo" />
        </Link>

        <div className="hidden items-center gap-2 lg:flex opacity-100">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95 opacity-100 hover:text-[#6fa96f] dark:hover:text-indigo-500 ${
                  isActive ? "text-[#6fa96f] dark:text-indigo-400" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <DarkModeToggle />
          <HamburgerMenu
            isOpen={isMobileMenuOpen}
            setIsOpen={setIsMobileMenuOpen}
            links={navLinks}
            pathname={pathname}
          />
        </div>
      </div>
    </nav>
  );
}
