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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
      className={`bg-black fixed top-0 z-20 overflow-hidden border-white/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur px-4 transition-all duration-300 w-auto ${
        isScrolled
          ? "left-0 right-0"
          : "mx-auto left-6 right-6 top-6 rounded-2xl"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="p-2" onClick={scrollToTop}>
          <img
            src="/greenhouse-logo.png"
            alt="Greenhouse Web Designs Logo"
            className="w-32 h-12"
          />
        </Link>

        <div className="hidden items-center gap-2 lg:flex opacity-100">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95 opacity-100 text-white hover:text-[#6fa96f] dark:hover:text-indigo-500 ${
                  isActive ? "text-[#6fa96f] dark:text-indigo-400" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex flex-row justify-center items-center opacity-100">
          <DarkModeToggle />
          <div className="lg:hidden opacity-100">
            <HamburgerMenu
              isMenuOpen={isMobileMenuOpen}
              onToggle={() => setIsMobileMenuOpen((prev) => !prev)}
            />
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-transparent backdrop-blur opacity-100">
          <ul className="flex flex-col items-left space-y-4 py-4 opacity-100 text-left">
            {navLinks.map((link) => (
              <li key={link.href} className="opacity-100">
                <Link
                  href={link.href}
                  className={`text-sm lg:text-base font-medium hover:font-bold transition-all duration-500 opacity-100 ${
                    pathname === link.href
                      ? "text-[#6fa96f] dark:text-indigo-500"
                      : "text-white"
                  }`}
                  onClick={() => {
                    scrollToTop();
                    toggleMobileMenu();
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
