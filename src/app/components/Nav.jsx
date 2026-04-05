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
      className={`bg-black fixed top-0 z-20 overflow-hidden border-white/10 bg-linear-to-br from-white/20 to-white/5 backdrop-blur px-2 sm:px-4 transition-all duration-300 w-auto ${
        isScrolled
          ? "left-0 right-0"
          : "mx-auto left-6 right-6 top-6 rounded-xl"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="py-2 sm:p-2" onClick={scrollToTop}>
          <img
            src="/greenhouse-logo.svg"
            alt="Greenhouse Web Designs Logo"
            className="w-32 h-12"
          />
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-md font-medium transition-colors duration-200
                  ${
                    isActive
                      ? "text-lightmode dark:text-darkmode"
                      : "text-white hover:text-lightmode dark:hover:text-darkmode"
                  }
                `}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-1 h-px w-full origin-left transition-transform duration-300
                  ${
                    isActive
                      ? "scale-x-100 bg-lightmode dark:bg-darkmode"
                      : "scale-x-0 bg-foreground/40 group-hover:scale-x-100"
                  }
                `}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex flex-row justify-center items-center">
          <DarkModeToggle />
          <div className="lg:hidden">
            <HamburgerMenu
              isMenuOpen={isMobileMenuOpen}
              onToggle={() => setIsMobileMenuOpen((prev) => !prev)}
            />
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-transparent backdrop-blur">
          <ul className="flex flex-col items-start space-y-4 py-4 text-left">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-base font-medium transition-colors duration-200
                      ${
                        isActive
                          ? "text-lightmode dark:text-darkmode"
                          : "text-white hover:text-lightmode dark:hover:text-darkmode"
                      }
                    `}
                    onClick={() => {
                      scrollToTop();
                      toggleMobileMenu();
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
