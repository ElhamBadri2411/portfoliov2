"use client";

import * as React from "react";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import useHasMounted from "@/hooks/hasMounted";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const hasMounted = useHasMounted();

  const setNextTheme = () => {
    console.log(theme);
    if (theme === "system") {
      setTheme("light");
    }
    if (theme === "light") {
      setTheme("dark");
    }
    if (theme === "dark") {
      setTheme("system");
    }
  };
  return (
    <>
      {hasMounted ? (
        <Button variant="navbar" size="icon" onClick={() => setNextTheme()}>
          {theme === "light" && (
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          )}
          {theme === "dark" && (
            <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          )}
          {theme === "system" && (
            <DesktopIcon className=" h-[1.2rem] w-[1.2rem]" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      ) : (
        <div className="h-9 w-9"></div>
      )}
    </>
  );
}
