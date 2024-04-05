import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

type Frontmatter = {
  title: string;
  date: string;
  summary: string;
  image: string;
  length: string;
};

export function parseFrontmatter(content: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(content);

  const frontmatter: {
    [key: string]: string;
  } = {};

  if (!match || !match[1]) {
    return null;
  }

  const body = content.replace(frontmatterRegex, "");
  const frontmatterLines = match[1].trim().split("\n");

  for (let i = 0; i < frontmatterLines.length; i++) {
    const split = frontmatterLines[i].split(": ");
    const key = split[0];
    const value = split[1];

    frontmatter[key] = value;
  }

  return {
    frontmatter: frontmatter as Frontmatter,
    body: body,
  };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((f) => path.extname(f) === ".mdx");
}

function readMDXFile(file: string) {
  const content = fs.readFileSync(file, "utf-8");
  return parseFrontmatter(content);
}

function getBlogData(dir: string) {
  const files = getMDXFiles(dir);
  return files.map((f) => {
    const { frontmatter, body } = readMDXFile(path.join(dir, f))!;
    const slug = path.basename(f, path.extname(f));
    return {
      frontmatter,
      body,
      slug,
    };
  });
}

export function getBlogPosts() {
  return getBlogData(path.join(process.cwd(), "/src/content")) as BlogPost[];
}

export type BlogPost = {
  frontmatter: Frontmatter;
  body: string;
  slug: string;
};
