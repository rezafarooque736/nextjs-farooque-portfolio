"use client";

import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};
export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section
      id="skills"
      ref={ref}
      className="scroll-mt-28 text-center max-sm:mb-28 max-w-[53rem]"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-slate-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="border bg-white border-black/10 px-5 py-3 rounded-xl dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
