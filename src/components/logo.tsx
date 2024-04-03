import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href={"/"}>
      <div className="flex flex-row justify-center ">
        <ChevronRight
          className="my-auto animate-pulse-new relative left-2"
          size={30}
        />
        <h1>&#123;E</h1>
        <h1>B&#125;</h1>
      </div>
    </Link>
  );
};

export default Logo;
