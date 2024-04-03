import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroBlog() {
  return (
    <div className="">
      <main className="px-4 py-8  container ">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-2xl font-semibold">From the blog</h4>
            <div className="flex items-center space-x-2">
              {/* <RssIcon className="text-orange-500 h-6 w-6" /> */}
              {/* <Button className=" bg-primary text-white">RSS Feed</Button> */}
              <Button className="bg-primary text-white">View all</Button>
            </div>
          </div>
          <div className="grid gap-4">
            <article className="flex items-center space-x-4">
              <Image
                alt="Blog post"
                className="h-24 w-24 object-cover"
                height="100"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <div>
                <h5 className="font-semibold">How Tailwind CSS grew on me</h5>
                <p className="text-sm text-gray-600">
                  A journey turning skepticism and dislike into enthusiasm
                </p>
                <p className="text-sm text-gray-600">
                  March 02, 2024 · 5 min read · 734 views
                </p>
              </div>
            </article>
            <article className="flex items-center space-x-4">
              <Image
                alt="Blog post"
                className="h-24 w-24 object-cover"
                height="100"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <div>
                <h5 className="font-semibold">
                  Things you can do to get started with development
                </h5>
                <p className="text-sm text-gray-600">
                  Tips, resources and ideas to get into coding and learning by
                  yourself
                </p>
                <p className="text-sm text-gray-600">
                  January 01, 2022 · 5 min read · 1187 views
                </p>
              </div>
            </article>
            <article className="flex items-center space-x-4">
              <Image
                alt="Blog post"
                className="h-24 w-24 object-cover"
                height="100"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <div>
                <h5 className="font-semibold">Direct download any Xcode</h5>
                <p className="text-sm text-gray-600">
                  Tired of interrupted Xcode downloads? Resume them seamlessly
                  with a quick trick
                </p>
                <p className="text-sm text-gray-600">
                  October 27, 2018 · 2 min read · 571 views
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
