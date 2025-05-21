"use client";

import ThemeProvider from "../theme/ThemeContext";
import Background from "./Background";
import { Analytics } from "@vercel/analytics/react";

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Background />
      {children}
      <Analytics />
    </ThemeProvider>
  );
}
