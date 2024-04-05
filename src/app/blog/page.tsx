import BlogPosts from "@/components/blogposts";
import { getBlogPosts } from "@/lib/blogutils";
import React from "react";
import Back from "@/components/back";

type Props = {};

const BlogPage = (props: Props) => {
  const blogPosts = getBlogPosts();

  return (
    <div className="md:container relative mx-auto w-full overflow-auto p-4 print:p-12 md:px-16">
      <main className="px-4 py-8  container ">
        <section>
          <Back link={"/"} />
          <h1 className="text-3xl">blog</h1>
          <BlogPosts blogPosts={blogPosts} />
        </section>
      </main>
    </div>
  );
};
export default BlogPage;
