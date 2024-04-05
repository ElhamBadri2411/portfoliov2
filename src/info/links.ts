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
  hasNotes: boolean;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  colour: string;
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
    position: "Software Developer (Co-op)",
    from: "Sep 2023",
    to: "Apr 2024",
    link: "https://www.taqauto.com/",
    image: "/taqauto_logo.jpg",
    hasNotes: true,
  },
  {
    company: "University of Toronto Scarborough",
    position: "Software Developer (Part-time)",
    from: "Mar 2023",
    to: "Aug 2023",
    link: "https://www.cathcrosscultural.org/",
    image: "/university_of_toronto_scarborough_logo.jpg",
    hasNotes: false,
  },
  {
    company: "Oracle",
    position: "Software Developer (Co-op)",
    from: "Sep 2022",
    to: "Dec 2022",
    link: "https://www.oracle.com/ca-en/",
    image: "/oracle_logo.jpg",
    hasNotes: true,
  },
  {
    company: "KHERG",
    position: "Software Developer (Part-time)",
    from: "May 2022",
    to: "Aug 2022",
    link: "https://nefros.net/",
    image: "/kidney_health_education_and_research_group_logo.jpg",
    hasNotes: false,
  },
  {
    company: "Sunnybrook",
    position: "Software Developer (Co-op)",
    from: "Jan 2022",
    to: "May 2022",
    link: "https://sunnybrook.ca/",
    image: "/sunnybrook_health_sciences_centre_logo.jpg",
    hasNotes: false,
  },
];

export const Projects: Project[] = [
  {
    title: "Playbook",
    description: "social media platform for gamers",
    image: "/playbook.jpg",
    link: "https://github.com/ElhamBadri2411/playbook",
    colour: "red",
  },
  {
    title: "WikiMe",
    description: "generate quizzes using Wikipedia",
    image: "/wikime.jpg",
    link: "https://github.com/ElhamBadri2411/wikiquiz-serve",
    colour: "blue",
  },
  {
    title: "MyBnb",
    description: "command line airbnb clone in java and mysql",
    image: "/mybnb.jpg",
    link: "https://github.com/ElhamBadri2411/mybnb",
    colour: "green",
  },
  //do the rest for: healthschedule, vent, soacialphoto, sortingvisualizer, todolist, link will be the form:
  // https://github.com/ELhamBadri2411/<project name>, please autogenerate the link
  {
    title: "HealthSchedule",
    description: "scheduling android app for health clinics",
    image: "/healthschedule.jpg",
    link: "https://github.com/ElhamBadri2411/healthschedule",
    colour: "yellow",
  },
  {
    title: "Vent",
    description: "anonymous social media where you vent your feelings",
    image: "/vent.jpg",
    link: "https://github.com/ElhamBadri2411/vent",
    colour: "purple",
  },
  {
    title: "SocialPhoto",
    description: "social media platform for photographers",
    image: "/socialphoto.jpg",
    link: "https://github.com/ElhamBadri2411/socialphoto",
    colour: "red",
  },
  {
    title: "SortingVisualizer",
    description: "visualize sorting algorithms",
    image: "/sorting.jpg",
    link: "https://github.com/ElhamBadri2411/sortingvisualizer",
    colour: "blue",
  },
  {
    title: "ToDoList",
    description: "simple todo list app",
    image: "/todolist.jpg",
    link: "https://github.com/ElhamBadri2411/todolist",
    colour: "green",
  },
];
