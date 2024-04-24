"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSectionInView } from "@/hooks";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { useAppContext } from "@/context/app-context";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection } = useAppContext();

  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-36"
      id="home"
      ref={ref}
    >
      {/* show avatar */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={"/farooque.png"}
              alt="Farooque Reza Profile photo"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="rounded-full w-24 h-24 object-cover border-white border-[0.35rem] shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-3xl cursor-context-menu"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      {/* show about me */}
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Farooque Reza.</span>{" "}
        I&apos;m a &nbsp;<span className="font-bold">full-stack developer</span>{" "}
        with &nbsp;
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      {/* show contact me */}
      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href={"#contact"}
          className="flex items-center justify-center gap-2 py-3 text-white transition rounded-full outline-none group bg-slate-900 px-7 focus:scale-110 hover:scale-110 active:scale-105 hover:bg-slate-950"
          onClick={() => {
            setActiveSection("Contact");
          }}
        >
          Contact me here{" "}
          <ArrowRight className="transition opacity-70 group-hover:translate-x-1" />
        </Link>

        <a
          href={"/farooque-reza-resume.pdf"}
          download={true}
          className="flex items-center justify-center gap-2 py-3 transition bg-white border rounded-full outline-none cursor-pointer group px-7 hover:scale-110 focus:scale-110 active:scale-105 border-black/10 dark:bg-white/10 dark:text-white/60"
        >
          Download CV{" "}
          <Download
            color="#222"
            className="transition opacity-60 group-hover:opacity-100"
          />
        </a>

        <Link
          href={"https://www.linkedin.com/in/farooque-reza-58423b24a/"}
          target="blank"
          className="flex items-center justify-center p-3 text-2xl transition bg-[#007abf] border rounded-full cursor-pointer hover:scale-[1.15] focus:scale-[1.15] active:scale-105 border-black/10 hover:text-slate-950 text-slate-900 dark:bg-white/10 dark:text-white/60"
        >
          <Linkedin size={"28"} color="#fff" />
        </Link>

        <Link
          href={"https://github.com/rezafarooque736"}
          target="blank"
          className="flex items-center justify-center p-3 text-2xl transition bg-white border rounded-full cursor-pointer hover:scale-[1.15] focus:scale-[1.15] active:scale-105 border-black/10 hover:text-slate-950 text-slate-900 dark:bg-white/10 dark:text-white/60"
        >
          <Github strokeWidth={"3"} size={"28"} />
        </Link>
      </motion.div>
    </section>
  );
};

export default Intro;
