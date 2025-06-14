'use client';

import { useAppContext } from '@/context/app-context';
import { links } from '@/lib/data';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  const { activeSection, setActiveSection } = useAppContext();

  return (
    <header className="relative z-[999]">
      <motion.div
        className="border-opacity-40 bg-opacity-80 dark:bg-opacity-75 fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white bg-white shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:border-black/40 dark:bg-slate-950"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>

      <nav className="fixed top-[0.15rem] left-1/2 flex h-[3rem] -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[iniitial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-slate-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="relative flex h-3/4 items-center justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={cn(
                  'flex w-full items-center justify-center px-3 py-3 transition hover:text-slate-950 dark:text-slate-500 dark:hover:text-slate-300',
                  {
                    'text-slate-950 dark:text-slate-200':
                      activeSection === link.name,
                  },
                )}
                onClick={() => {
                  setActiveSection(link.name);
                }}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-slate-100 dark:bg-slate-800"
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
