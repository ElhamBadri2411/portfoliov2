import Link from "next/link";
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
              <h1 className="text-6xl font-bold my-12">
                Hey! I&apos;m
                <span className="text-primary ml-2">Elham</span>
                <span className=" animate-bounce inline-block">👋</span>
              </h1>
              <h3 className="text-3xl font-semibold mb-4 inline"></h3>
            </div>

            <p className="mb-4">
              Passionate and creative Software Engineer in Toronto{" "}
              <span aria-label="flag" role="Image" className="ml-1.5">
                🇨🇦
              </span>
            </p>
            <p className="mb-4">
              Detail-driven, I strive to build great-looking, user-friendly
              software while enhancing my skills along the way
            </p>
            <Link href={"#"}>
              <Button
                className="bg-primary text-primary-foreground"
                size={"lg"}>
                More about me
              </Button>
            </Link>
            <div className="flex space-x-4 mt-4">
              <Link href={"#"}>
                <Badge className=" shadow-sm shadow-black/30 rounded-full bg-background text-primary hover:text-[#fff0f0]">
                  <GithubIcon />
                </Badge>
              </Link>
              <Link href={"#"}>
                <Badge className="shadow-sm shadow-black/30 rounded-full bg-background text-primary hover:text-[#fff0f0]">
                  <LinkedinIcon />
                </Badge>
              </Link>
              <Link href={"#"}>
                <Badge className="shadow-sm shadow-black/30 rounded-full bg-background text-primary hover:text-[#fff0f0]">
                  <TwitterIcon />
                </Badge>
              </Link>
              <Link href={"#"}>
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
