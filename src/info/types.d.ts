export type Link = {
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
};

export type Skill = {
  logo: IconType;
  name: string;
  colour: string;
};

export type Experience = {
  company: string;
  position: string;
  from: string;
  to?: string;
  link: string;
  image: string;
  slug?: string;
  location: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  colour: string;
};
