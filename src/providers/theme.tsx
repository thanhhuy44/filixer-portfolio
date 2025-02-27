"use client";

import dynamic from "next/dynamic";

const ThemeProvider = dynamic(
  () => import("next-themes").then((e) => e.ThemeProvider),
  {
    ssr: false,
  }
);

export default ThemeProvider;
