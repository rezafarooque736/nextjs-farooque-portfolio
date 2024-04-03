"use client";

import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div
      className="hidden w-1 h-12 my-16 rounded-full sm:block bg-slate-200 dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
};

export default SectionDivider;
