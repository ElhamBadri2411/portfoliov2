import Image from "next/image";
import Link from "next/link";
import { platform } from "os";
import React from "react";
import { Links } from "@/info/links";
import { Badge } from "@/components/ui/badge";
// import  {} from "../../../public/"
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";
import Back from "@/components/back";
type Props = {};

const AboutPage = (props: Props) => {
  const { github, linkedin, twitter, email } = Links;

  return (
    <main className="lg:container mx-auto w-full overflow-auto p-4 lg:px-16">
      <div className="px-4 pt-8 ">
        <Back link={"/"} />
        <h1 className="text-3xl">about me</h1>
        {/* <div className=" w-28 bg-primary h-0.5 rounded-full" /> */}
        <div className="pt-5 flex flex-col-reverse lg:flex-row justify-between">
          <div className=" lg:max-w-96">
            <p>
              Hey there! I&apos;m a CS student at the University of Toronto with
              about 2 years of practical experience in software engineering.
              I&apos;m passionate about building and creating, and I&apos;m
              always eager to dive into new{" "}
              <Link href={"/projects"} className="text-primary hover:underline">
                projects
              </Link>{" "}
              and expand my{" "}
              <Link href={"/#skills"} className="text-primary hover:underline">
                skills
              </Link>
              .
            </p>
            <br />
            <p>
              Outside of coding, I enjoy an active lifestyle. Whether it&apos;s
              going for walks, hitting the gym, or cruising on my skateboard, I
              like to stay on the move. One of my favourite ways to stay healthy
              physically and mentally is training Muay Thai!
            </p>
          </div>
          <div className="flex items-center justify-center max-w-80 min-w-44 mx-auto lg:py-0 py-5 w-full">
            <Image
              src={"/headshot.jpg"}
              height={300}
              width={300}
              alt="profile-picture"
              className="rounded-full min-w-44"
            />
          </div>
        </div>
        <br />
        <p>
          When it comes to entertainment, I enjoy a good mix of movies, TV
          shows, podcasts, books, and manga. I&apos;m drawn to films like{" "}
          <Link
            href={"https://en.wikipedia.org/wiki/Whiplash_(2014_film)"}
            className="text-primary hover:underline">
            Whiplash
          </Link>{" "}
          and{" "}
          <Link
            href={"https://en.wikipedia.org/wiki/Interstellar_(film)"}
            className="text-primary hover:underline">
            Interstellar
          </Link>
          . And when it&apos;s TV time, I&apos;m all about series like{" "}
          <Link
            href={"https://en.wikipedia.org/wiki/Breaking_Bad"}
            className="text-primary hover:underline">
            Breaking Bad
          </Link>{" "}
          and{" "}
          <Link
            href={"https://en.wikipedia.org/wiki/Game_of_Thrones"}
            className="text-primary hover:underline">
            Game of Thrones
          </Link>{" "}
          for their gripping narratives. Anime/Manga such as{" "}
          <Link
            href={"https://en.wikipedia.org/wiki/One_Piece"}
            className="text-primary hover:underline">
            One Piece
          </Link>
          ,{" "}
          <Link
            href={"https://en.wikipedia.org/wiki/Vinland_Saga_(manga)"}
            className="text-primary hover:underline">
            Vinland Saga
          </Link>
          ,{" "}
          <Link
            href={"https://en.wikipedia.org/wiki/Hajime_no_Ippo"}
            className="text-primary hover:underline">
            Hajime no Ippo
          </Link>
          , and{" "}
          <Link
            href={"https://en.wikipedia.org/wiki/Jujutsu_Kaisen"}
            className="text-primary hover:underline">
            Jujustu Kaisen
          </Link>{" "}
          also hold a special place in my watchlist/readlist, always sparking my
          imagination.
        </p>
        <br />
        <p>
          I&apos;m all about learning and trying different sorts of
          technologies. Whether it&apos;s Go, TypeScript, Next.js, C, Java, Python, SQL or
          any other tool, I&apos;m ready to tackle challenges head-on. Whether
          I&apos;m building efficient solutions or refining user interfaces
          with, I&apos;m always exploring new technologies and pushing
          boundaries.
        </p>
        <br />
        <p>
          In the field of software development, I don&apos;t just write code, I
          love solving problems and creating solutions. I really enjoy
          architecting new solutions and optimizing existing ones. I&apos;m
          always looking for ways to improve my skills and learn new
          technologies, and I&apos;m excited to take on new challenges.
        </p>
        <br />
        <p>
          So, if you&apos;re looking for a software engineer with a passion for
          innovation and a knack for problem-solving, look no further. Check out
          my{" "}
          <Link
            href={"/Elham_Badri_Resume.pdf"}
            className="text-primary hover:underline">
            resume
          </Link>{" "}
          and feel free to reach out on:
        </p>

        <div className="py-10 px-20 flex justify-around items-center mx-auto">
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
        <p>Let&apos;s collaborate and bring some incredible ideas to life!</p>
      </div>
    </main>
  );
};

export default AboutPage;
