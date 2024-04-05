import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";
import { Links } from "@/info/links";

const Footer = () => {
  const { github, linkedin, email, twitter } = Links;

  return (
    <footer className="border-t py-6 px-4 md:px-12">
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/">
            <p className="text-sm md:pl-3.5 pl-14 hover:underline">
              Elham Badri
            </p>
          </Link>
          <div className="flex space-x-4 mt-4">
            <Link href={github}>
              <Badge className="shadow-sm shadow-black/30 rounded-full bg-background text-primary hover:text-[#fff0f0]">
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
          </div>
        </div>
        <div className="mb-4 md:mb-0">
          <ul className="text-sm flex space-x-4">
            <li>
              <Link href="/">
                <span className="text-gray-600 cursor-pointer hover:underline">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="text-gray-600 cursor-pointer hover:underline">
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <span className="text-gray-600 cursor-pointer hover:underline">
                  Projects
                </span>
              </Link>
            </li>
            <li>
              <Link href="/experience">
                <span className="text-gray-600 cursor-pointer hover:underline">
                  Experience
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="text-sm flex space-x-4">
            <li>
              <Link href="/resume">
                <span className="text-gray-600 cursor-pointer hover:underline">
                  Resume
                </span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <span className="text-gray-600 cursor-pointer hover:underline">
                  Blog
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
