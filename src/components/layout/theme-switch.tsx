"use client";

import { Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "../ui/button";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
      variant="ghost"
      size="icon"
      className="rounded-full"
    >
      <Sun />
    </Button>
  );
}

export default ThemeSwitch;
