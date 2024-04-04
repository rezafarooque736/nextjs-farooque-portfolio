"use client";

import React from "react";
import { useSectionInView } from "@/hooks";
import SectionHeading from "./section-heading";
import ExperienceTimeline from "@/components/experience-timeline";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);
  return (
    <section id="experience" ref={ref} className="mt-10">
      <SectionHeading>My Experience</SectionHeading>
      <div className="h-full sm:max-w-[53rem]">
        <ExperienceTimeline />
      </div>
    </section>
  );
}
