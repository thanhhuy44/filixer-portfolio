"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

import { Toaster } from "@/components/ui/sonner";

import QueryProvider from "./query";
import RefetchSessionProvider from "./session";

function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryProvider>
        <SessionProvider>
          <RefetchSessionProvider>
            {children}
            <Toaster />
          </RefetchSessionProvider>
        </SessionProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}

export default Providers;
