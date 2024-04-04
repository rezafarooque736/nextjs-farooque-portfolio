"use client";

import { useAppContext } from "@/context/app-context";
import { SectionNameProps } from "@/types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useSectionInView = (
  sectionName: SectionNameProps,
  threshold = 0.75
) => {
  const { ref, inView } = useInView({
    threshold,
  });

  const { setActiveSection } = useAppContext();

  useEffect(() => {
    if (inView) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, sectionName]);

  return { ref };
};
