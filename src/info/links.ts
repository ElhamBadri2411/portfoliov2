import {
  SiC,
  SiPython,
  SiCsharp,
  SiMysql,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiFlask,
  SiExpress,
  SiMongodb,
  SiMicrosoftsqlserver,
  SiGit,
  SiDocker,
  SiGooglecloud,
  SiAmazonaws,
  SiKubernetes,
  SiLinux,
  SiGitlab,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { IconType } from "react-icons";

type Link = {
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
};

type Skill = {
  logo: IconType;
  name: string;
  colour: string;
};

type Experience = {
  company: string;
  position: string;
  from: string;
  to?: string;
  link: string;
  image: string;
};

export const Links: Link = {
  github: "https://www.github.com/elhambadri2411",
  linkedin: "https://www.linkedin.com/in/elhamb/",
  twitter: "https://twitter.com/irdab_dev",
  email: "mailto:elhambadri24@gmail.com",
};

export const Skills: Skill[] = [
  {
    logo: FaJava,
    name: "Java",
    colour: "java",
  },
  {
    logo: SiC,
    name: "C",
    colour: "clang",
  },
  {
    logo: SiPython,
    name: "Python",
    colour: "Python",
  },
  {
    logo: SiCsharp,
    name: "C#",
    colour: "Csharp",
  },
  {
    logo: SiMysql,
    name: "MySQL",
    colour: "Mysql",
  },
  {
    logo: SiPostgresql,
    name: "PostgreSQL",
    colour: "Postgresql",
  },
  {
    logo: SiJavascript,
    name: "JavaScript",
    colour: "Javascript",
  },
  {
    logo: SiTypescript,
    name: "TypeScript",
    colour: "Typescript",
  },
  {
    logo: SiHtml5,
    name: "HTML",
    colour: "Html5",
  },
  {
    logo: SiCss3,
    name: "CSS",
    colour: "Css3",
  },
  {
    logo: SiReact,
    name: "React",
    colour: "React",
  },
  {
    logo: SiNextdotjs,
    name: "Next.js",
    colour: "Nextjs",
  },
  {
    logo: SiRedux,
    name: "Redux",
    colour: "Redux",
  },
  {
    logo: SiTailwindcss,
    name: "Tailwind CSS",
    colour: "Tailwindcss",
  },
  {
    logo: SiNodedotjs,
    name: "Node.js",
    colour: "Nodejs",
  },
  {
    logo: SiFlask,
    name: "Flask",
    colour: "Flask",
  },
  {
    logo: SiExpress,
    name: "Express",
    colour: "Expressjs",
  },
  {
    logo: SiMongodb,
    name: "MongoDB",
    colour: "Mongodb",
  },
  {
    logo: SiMicrosoftsqlserver,
    name: "Microsoft SQL Server",
    colour: "Microsoftsqlserver",
  },
  {
    logo: SiGit,
    name: "Git",
    colour: "Git",
  },
  {
    logo: SiDocker,
    name: "Docker",
    colour: "Docker",
  },
  {
    logo: SiGooglecloud,
    name: "Google Cloud",
    colour: "Googlecloud",
  },
  {
    logo: SiAmazonaws,
    name: "Amazon Web Services",
    colour: "Amazonaws",
  },
  {
    logo: SiKubernetes,
    name: "Kubernetes",
    colour: "Kubernetes",
  },
  {
    logo: SiLinux,
    name: "Linux",
    colour: "Linux",
  },
  {
    logo: SiGitlab,
    name: "GitLab",
    colour: "Gitlab",
  },
];

export const Experiences: Experience[] = [
  {
    company: "Taq",
    position: "Software Developer",
    from: "Sep 2023",
    to: "Apr 2024",
    link: "taq",
    image: "",
  },
];
