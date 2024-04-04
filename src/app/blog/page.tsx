import BlogPosts from "@/components/blogposts";
import { getBlogPosts } from "@/lib/blogutils";
import React from "react";

type Props = {};

const BlogPage = (props: Props) => {
  const blogPosts = getBlogPosts();

  return (
    <div className="md:container relative mx-auto w-full overflow-auto p-4 print:p-12 md:p-16">
      <main className="px-4 py-8  container ">
        <section>
          <h1 className="pt-10 text-3xl">blog</h1>
          <BlogPosts blogPosts={blogPosts} />
        </section>
      </main>
    </div>
  );
};
export default BlogPage;
