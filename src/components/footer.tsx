import React from "react";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Links } from "@/info/links";
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";
type Props = {};

const Footer = (props: Props) => {
  const { github, linkedin, email, twitter } = Links;
  return (
    <div className="container mx-auto w-full p-4 ">
      <div className="container px-4 py-8">
        <footer className="border-t pt-6 mx-12">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm">Elham Badri</p>
              <p className="text-sm"></p>
              <div className="flex space-x-4 mt-4">
                <Link href={github}>
                  <Badge className=" shadow-sm shadow-black/30 rounded-full bg-background text-primary hover:text-[#fff0f0]">
                    <GithubIcon />
                  </Badge>
                </Link>
                <Link href={linkedin}>
                  <Badge className="shadow-sm shadow-black/30 rounded-full bg-background text-primary hover:text-[#fff0f0]">
                    <LinkedinIcon />
                  </Badge>
                </Link>
                <Link href={twitter}>
                  <Badge className="shadow-sm shadow-black/30 rounded-full bg-background text-primary hover:text-[#fff0f0]">
                    <TwitterIcon />
                  </Badge>
                </Link>
                <Link href={email}>
                  <Badge className="shadow-sm shadow-black/30 rounded-full bg-background text-primary hover:text-[#fff0f0]">
                    <MailIcon />
                  </Badge>
                </Link>
                {/* <MailIcon className="text-gray-600 h-6 w-6" /> */}
              </div>
            </div>
            <div>
              <ul className="text-sm">
                <li>
                  <Link className="text-gray-600" href="#">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600" href="#">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600" href="#">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-sm">
                <li>
                  <Link className="text-gray-600" href="#">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600" href="#">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600" href="#">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600" href="#">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
