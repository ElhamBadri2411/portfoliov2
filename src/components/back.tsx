import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = { link: string };

const Back = ({ link }: Props) => {
  return (
    <div className="text-gray-500 pt-10 text-xs py-1.5">
      <Link href={link} className="hover:underline flex flex-row justify-start">
        go back
      </Link>
    </div>
  );
};

export default Back;
