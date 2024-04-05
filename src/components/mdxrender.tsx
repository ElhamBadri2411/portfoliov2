import { BlogPost } from "@/lib/blogutils";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types";
import rehypeHighlight from "rehype-highlight";
import Link from "next/link";
import hljs, { HighlightOptions } from "highlight.js";
import Image from "next/image";
import "@/../public/monokai.css";

type Props = {
  blogpost: BlogPost;
};

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}
function CustomLink(props: any) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props} className="text-primary hover:underline">
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

const componentsCustom: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="py-3 text-3xl font-semibold">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className=" py-3 text-2xl font-semibold text-primary-secondary">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="py-3 text-xl font-semibold">{children}</h3>
  ),
  h4: ({ children }) => <h4 className="">{children}</h4>,
  h5: ({ children }) => <h5 className="">{children}</h5>,
  h6: ({ children }) => <h6 className="">{children}</h6>,
  p: ({ children }) => <p className="py-3 text-base ">{children}</p>,
  ul: ({ children }) => <ul className="pl-5 list-disc py-3">{children}</ul>,
  ol: ({ children }) => (
    <ol className="pl-10 pr-1.5 list-decimal py-3">{children}</ol>
  ),
  li: ({ children }) => <li className="py-3">{children}</li>,
  a: (
    { href, children } // Add href attribute for links
  ) => CustomLink({ href, children }),
  img: (
    { src, alt } // Add src and alt attributes for images
  ) => RoundedImage({ src, alt }),
  code: ({ children }) => (
    <div className=" w-full pl-1 pr-3 py-5 rounded-md bg-gray-800 text-white">
      <code className="p-1">{children}</code>
    </div>
  ),

  // Add more components as needed (address, blockquote, pre, etc.)
  // ...
};
const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
};

export default async function MDXRender({ blogpost }: Props) {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  return (
    <>
      <MDXRemote
        source={blogpost.body}
        components={componentsCustom}
        // @ts-ignore
        options={options}
      />
    </>
  );
}
