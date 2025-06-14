'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSectionInView } from '@/hooks';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { useAppContext } from '@/context/app-context';

const Intro = () => {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection } = useAppContext();

  return (
    <section
      className="mb-28 max-w-[50rem] scroll-mt-36 text-center sm:mb-0"
      id="home"
      ref={ref}
    >
      {/* show avatar */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src={'/farooque.jpg'}
              alt="Farooque Reza Profile photo"
              width={144}
              height={144}
              quality={90}
              priority={true}
              className="h-36 w-36 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* show about me */}
      <motion.h1
        className="mt-12 mb-20 px-4 text-2xl !leading-[1.5] font-medium sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Farooque Reza.</span> A
        &nbsp;
        <span className="font-bold">Full Stack Software developer</span> with
        &nbsp;
        <span className="font-bold">3 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>.
      </motion.h1>

      {/* show contact me */}
      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href={'#contact'}
          className="group flex items-center justify-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-white transition outline-none hover:scale-110 hover:bg-slate-950 focus:scale-110 active:scale-105"
          onClick={() => {
            setActiveSection('Contact');
          }}
        >
          Contact me here{' '}
          <ArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>

        <a
          href={'/farooque-reza-resume.pdf'}
          download={true}
          className="group flex cursor-pointer items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 transition outline-none hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10 dark:text-white/60"
        >
          Download CV{' '}
          <Download
            color="#222"
            className="opacity-60 transition group-hover:opacity-100"
          />
        </a>

        <Link
          href={'https://www.linkedin.com/in/farooque-reza-58423b24a/'}
          target="blank"
          className="flex cursor-pointer items-center justify-center rounded-full border border-black/10 bg-[#007abf] p-3 text-2xl text-slate-900 transition hover:scale-[1.15] hover:text-slate-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
        >
          <Linkedin size={'28'} color="#fff" />
        </Link>

        <Link
          href={'https://github.com/rezafarooque736'}
          target="blank"
          className="flex cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white p-3 text-2xl text-slate-900 transition hover:scale-[1.15] hover:text-slate-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
        >
          <Github strokeWidth={'3'} size={'28'} />
        </Link>
      </motion.div>
    </section>
  );
};

export default Intro;
