"use client";

import { useSectionInView } from "@/hooks";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { ProjectTagProps } from "@/types";
import { Button } from "./ui/button";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      ref={ref}
      className="w-full px-4 mx-auto mt-20 text-center scroll-mt-28 max-sm:mb-28 sm:max-w-7xl sm:px-8"
    >
      <SectionHeading>My Projects / Works</SectionHeading>
      <p className="text-lg text-slate-500 text-wrap">
        Here you will find some of the Company projects that I have created.
      </p>
      <div className="w-full">
        <div className="grid grid-cols-1 gap-5 my-10 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((item, idx) => (
            <Link
              key={item?.id}
              href={item?.webUrl}
              target="blank"
              className="relative block w-full h-full group"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-2xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <Card className="rounded-xl h-auto w-full p-0 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
                <CardHeader className="relative p-0">
                  <Image
                    width={392}
                    height={265}
                    alt={item.title}
                    src={item.imageUrl}
                    className="w-[392px] h-[265px] object-cover group-hover:scale-105 ease-in-out duration-200 group-hover:opacity-70 transition-transform"
                  />
                  <div className="absolute hidden inset-28 group-hover:flex group-hover:items-center group-hover:justify-center">
                    <Button
                      variant="outline"
                      className="items-center rounded-3xl ring-2 ring-sky-700 bg-slate-200 hover:bg-slate-50"
                    >
                      Visit Website{" "}
                      <span>
                        <ChevronRightIcon />
                      </span>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-1 my-2">
                  <CardTags tags={item.tags} />
                  <CardTitle className="px-2 my-3 text-xl font-medium text-left text-zinc-100 line-clamp-1">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="px-2 mb-1 text-sm text-left text-zinc-400 line-clamp-2">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
              <Card></Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

const CardTags = ({ tags }: { tags: ProjectTagProps }) => {
  return (
    <div className="relative flex justify-start gap-1 mx-1 overflow-x-auto flex-nowrap">
      {tags?.map((item) => (
        <Badge key={item.id}>{item.name}</Badge>
      ))}
    </div>
  );
};
