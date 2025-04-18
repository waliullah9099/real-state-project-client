"use client";

import { ThemeProvider } from "next-themes";

export default function CustomThemeProvider({ children }) {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
