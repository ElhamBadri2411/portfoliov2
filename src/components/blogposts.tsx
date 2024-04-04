import { BlogPost } from "@/lib/blogutils";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  blogPosts: BlogPost[];
};

const BlogPosts = ({ blogPosts }: Props) => {
  return (
    <div className="pt-5">
      {blogPosts.map(({ frontmatter, slug }) => {
        const { title, summary, date, image, length } = frontmatter;
        return (
          <Link key={slug} href={`/blog/${slug}`}>
            <div className="w-full group flex items-center space-x-4 py-6 rounded-sm transition-colors border-background hover:border-gray-300 dark:hover:border-gray-200">
              <Image
                className="aspect-square rounded-sm object-contain h-16 w-16"
                height={200}
                width={200}
                alt="Blog post"
                src={image}
              />
              <div>
                <h5 className="font-semibold group-hover:underline">{title}</h5>
                <p className="text-sm text-gray-600">{summary}</p>
                <p className="text-sm text-gray-600">
                  {date} · {length}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogPosts;
