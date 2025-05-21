"use client";

import dynamic from "next/dynamic";
import Background from "./Background";
import { Analytics } from "@vercel/analytics/react";
import Nav from "./Nav";
import Footer from "./Footer";

const ThemeProvider = dynamic(() => import("../theme/ThemeContext"), {
  ssr: false,
});

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Background />
      <Nav />
      {children}
      <Footer />
      <Analytics />
    </ThemeProvider>
  );
}
