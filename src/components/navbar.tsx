import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme-toggle";
import Logo from "./logo";

type Props = {};

export const Navbar = (props: Props) => {
  return (
    <div className="fixed top-0 h-full w-full mx-auto z-50 right-0  p-3 backdrop-blur-sm transform-gpu transition-[max-height] duration-300 max-h-20  sm:max-h-21 border-b border-background/50">
      <nav className="fixed text-primary-foreground inset-x-0 w-full sm:max-w-3xl max-w-fit mx-auto z-50 bg-primary rounded-xl ring-2 ring-primary/30 hover:shadow-md hover:shadow-primary/80 transition-shadow duration-150 ease-in-out">
        <div className="max-w-5xl mx-auto md:px-4">
          <div className="flex items-center justify-between p-1.5 h-14">
            <span className="hidden sm:block text-lg font-semibold">
              <Logo />
            </span>
            <div className="flex md:space-x-2">
              <Link href={"/blog"}>
                <Button className="p-1.5" variant={"navbar"}>
                  Blog
                </Button>
              </Link>
              <Link href={"/about"}>
                <Button className="p-1.5" variant={"navbar"}>
                  About
                </Button>
              </Link>
              <Link href={"/projects"}>
                <Button className="p-1.5" variant={"navbar"}>
                  Projects
                </Button>
              </Link>
              <Link href={"/contact"}>
                <Button className="p-1.5" variant={"navbar"}>
                  Contact
                </Button>
              </Link>
              <div>
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
