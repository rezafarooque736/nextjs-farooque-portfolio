import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Skills from '@/components/skills';
import Intro from '@/components/intro';
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
