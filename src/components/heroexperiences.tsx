import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Experiences } from "@/info/experience";
import Experience from "./experience";

export default function HeroExperience() {
  const currentlyAt = Experiences[0];

  return (
    <div className="">
      <main className="px-4 py-8  container ">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-2xl font-semibold">Current position</h4>
            <div className="flex items-center space-x-2">
              <Link href={"/experience"}>
                <Button className="bg-primary ">View all</Button>
              </Link>
            </div>
          </div>
          <div className="">
            <Experience experiences={[currentlyAt]} isHero={true} />
          </div>
        </section>
      </main>
    </div>
  );
}
