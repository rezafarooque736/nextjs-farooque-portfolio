import { links, projectsData } from "@/lib/data";

// define the types
export type SectionNameProps = (typeof links)[number]["name"];

export type AppContextProps = {
  activeSection: SectionNameProps;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionNameProps>>;
};

export type ProjectTagProps = (typeof projectsData)[number]["tags"];
