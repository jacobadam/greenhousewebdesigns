"use client";

import ThemeProvider from "../theme/ThemeContext";
import Background from "./Background";
import { Analytics } from "@vercel/analytics/react";
import Nav from "./Nav";
import Footer from "./Footer";

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
