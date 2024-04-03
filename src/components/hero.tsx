import Link from "next/link";
import { Links } from "@/info/links";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  TerminalSquareIcon,
  TwitterIcon,
  XIcon,
} from "lucide-react";

export default function Hero() {
  const { github, linkedin, twitter, email } = Links;

  return (
    <div className="">
      <main className="px-4 py-8 container ">
        <div
        //  className="flex "
        >
          <section className="mb-8 mx-auto">
            {/* <h2 className="text-4xl font-bold mb-2 ">
              Hello, World!{" "}
              <span className=" animate-bounce inline-block">👋</span>
            </h2>
            <h3 className="text-3xl font-semibold mb-4 inline">
              I&apos;m
              <span className="text-primary ml-2">Elham Badri</span>
            </h3> 
            
            <TerminalSquareIcon
              className="inline-block mb-4 ml-2 animate-pulse"
              size={30}
            />
            */}
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-6xl font-bold my-16">
                Hey, I&apos;m
                <span className="text-primary"> Elham! </span>
                <span className=" animate-bounce inline-block">👋</span>
              </h1>
            </div>
            <p className="mb-4">
              I&apos;m a Software Engineer who is constantly Building and always
              Learning! Currently a computer science student at the University
              of Toronto
              <span aria-label="flag" role="Image" className="ml-1.5">
                🇨🇦
              </span>{" "}
              graduating May 2025.
            </p>
            <p className="mb-4">
              {/* <span aria-label="flag" role="Image" className="ml-1.5">
                🇨🇦
              </span> */}
            </p>
            <p className="mb-4">
              I have a passion for diving into a variety of projects, whether
              it&apos;s crafting robust backend systems, delving into the
              intricacies of low-level programming, developing efficient
              internal tools, or creating full-stack applications.
            </p>
            <p className="mb-4">
              Currently on the lookout for exciting Fall 2024 internship
              opportunities, May 2025 full-time roles, or even that next big
              startup idea :)
            </p>
            <p className="mb-4">
              Let&apos;s connect and create something awesome together!
            </p>
            <Link href={"/about"}>
              <Button
                className="bg-primary text-primary-foreground"
                size={"lg"}>
                More about me
              </Button>
            </Link>
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
          </section>
          {/* <div className="max-w-52 max-h-52">
            <Image
              src={"/headshot.jpg"}
              width={250}
              alt="profile"
              className=" rounded-full"
              height={50}
            />
          </div> */}
        </div>
      </main>
    </div>
  );
}
