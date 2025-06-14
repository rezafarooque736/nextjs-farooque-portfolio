'use client';

import { useSectionInView } from '@/hooks';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { ProjectTagProps } from '@/types';
import { Button } from './ui/button';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.5);
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      ref={ref}
      className="mx-auto mt-20 w-full scroll-mt-28 px-4 text-center max-sm:mb-28 sm:max-w-7xl sm:px-8"
    >
      <SectionHeading>My Projects / Works</SectionHeading>
      <p className="text-lg text-wrap text-slate-500">
        Here you will find some of the Company projects that I have created.
      </p>
      <div className="w-full">
        <div className="my-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((item, idx) => (
            <Link
              key={item?.id}
              href={item?.webUrl}
              target="blank"
              className="group relative block h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 block h-full w-full rounded-2xl bg-neutral-200 dark:bg-slate-800/[0.8]"
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
              <Card className="relative z-20 h-auto w-full overflow-hidden rounded-xl border border-transparent bg-black p-0 group-hover:border-slate-700 dark:border-white/[0.2]">
                <CardHeader className="relative p-0">
                  <Image
                    width={392}
                    height={265}
                    alt={item.title}
                    src={item.imageUrl}
                    className="h-[265px] w-[392px] object-contain transition-transform duration-200 ease-in-out group-hover:scale-105 group-hover:opacity-70"
                  />
                  <div className="absolute inset-28 hidden group-hover:flex group-hover:items-center group-hover:justify-center">
                    <Button
                      variant="outline"
                      className="items-center rounded-3xl bg-slate-200 ring-2 ring-sky-700 hover:bg-slate-50"
                    >
                      Visit Website{' '}
                      <span>
                        <ChevronRightIcon />
                      </span>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="my-2 p-1">
                  <CardTags tags={item.tags} />
                  <CardTitle className="my-3 line-clamp-1 px-2 text-left text-xl font-medium text-zinc-100">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="mb-1 line-clamp-2 px-2 text-left text-sm text-zinc-400">
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
    <div className="relative mx-1 flex flex-nowrap justify-start gap-1 overflow-x-auto">
      {tags?.map((item) => <Badge key={item.id}>{item.name}</Badge>)}
    </div>
  );
};
