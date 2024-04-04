import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BlogPosts from "./blogposts";
import { getBlogPosts } from "@/lib/blogutils";

export default function HeroBlog() {
  const threeRecentPosts = getBlogPosts().slice(0, 3);

  return (
    <div className="">
      <main className="px-4 py-8  container ">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-2xl font-semibold">From the blog</h4>
            <div className="flex items-center space-x-2">
              <Link href={"/blog"}>
                <Button className="bg-primary text-white">View all</Button>
              </Link>
            </div>
          </div>
          <div className="">
            <BlogPosts blogPosts={threeRecentPosts} />
          </div>
        </section>
      </main>
    </div>
  );
}
