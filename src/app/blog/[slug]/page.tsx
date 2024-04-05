import React from "react";
import MDXRender from "@/components/mdxrender";
import { getBlogPosts } from "@/lib/blogutils";
import Image from "next/image";
type Props = {
  params: any;
};

const BlogEntryPage = ({ params }: Props) => {
  let post = getBlogPosts().find((post) => post.slug === params.slug)!;
  return (
    <div className="md:container relative mx-auto w-full overflow-auto p-4 print:p-12 md:px-16">
      <main className="px-4 py-8 ">
        <section>
          <h1 className="pt-10 text-4xl font-semibold max-w-3xl">
            {post.frontmatter.title}
          </h1>
          <div className="mt-2 mb-8 text-sm flex flex-row justify-between max-w-2xl">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {post.frontmatter.date}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {post.frontmatter.length}
            </p>
          </div>
          <div className="flex flex-row items-center justify-center pt-2 pb-4">
            <Image
              src={post.frontmatter.image}
              alt="image"
              width={400}
              height={200}
              className="rounded-lg"
            />
          </div>
          <article className="prose prose-quoteless prose-neutral dark:prose-invert">
            <MDXRender blogpost={post} />
          </article>
        </section>
      </main>
    </div>
  );
};

export default BlogEntryPage;
