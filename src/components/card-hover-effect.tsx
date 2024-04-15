import { Project } from "@/info/types";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const coloursMap: any = {
  red: "bg-red-400/40",
  green: "bg-green-400/40",
  blue: "bg-blue-400/40",
  yellow: "bg-yellow-400/40",
  purple: "bg-purple-400/40",
};

export const HoverEffect = ({
  items,
  className,
}: {
  items: Project[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid  grid-cols-1 pt-5", className)}>
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={idx}
          className="relative group  block p-2 h-full w-full md:max-w-2xl "
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                // className={`absolute inset-0 h-full w-full bg-primary/40  block  rounded-3xl`}
                className={`absolute inset-0 h-full w-full ${
                  coloursMap[item.colour]
                } block  rounded-3xl`}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 1, delay: 0 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="h-16 w-16 rounded-lg border-gray-200 dark:border-gray-800">
              <Image
                alt={item.title}
                className="square w-full rounded-lg object-contain"
                height={200}
                src={item.image}
                width={200}
              />
            </div>
            <div className="pl-5">
              <CardTitle className="text-secondary-foreground">
                {item.title}
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl w-full p-4 overflow-hidden bg-transparent border border-slate-600 dark:border-white/65 group-hover:border-slate-700 dark:group-hover:border-white/90 relative z-20",
        className
      )}>
      <div className="relative z-50">
        <div className="flex flex-row">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-zinc-100 font-bold tracking-wide pt-2 group-hover:underline  transition-colors duration-200",
        className
      )}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "pt-2  tracking-wide leading-relaxed text-sm text-secondary-foreground",
        className
      )}>
      {children}
    </p>
  );
};
