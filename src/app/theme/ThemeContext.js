"use client";

import React from "react";
import dynamic from "next/dynamic";

const ClientThemeProvider = dynamic(
  () => import("next-themes").then((e) => e.ThemeProvider),
  {
    ssr: false,
  }
);

export default function ThemeProvider({ children, ...props }) {
  return <ClientThemeProvider {...props}>{children}</ClientThemeProvider>;
}
