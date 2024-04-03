"use client";

import { Send } from "lucide-react";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      // aria-disabled={pending}
      className="group flex items-center justify-center h-[3rem] w-[8rem] rounded-full gap-2 bg-slate-900 text-white outline-none transition-all hover:scale-110 focus:scale-110 active:scale-105 hover:bg-slate-950 disabled:bg-opacity-70 disabled:scale-100 disabled:cursor-not-allowed dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white self-center"
      disabled={pending}
    >
      {pending ? (
        <div className="w-5 h-5 border-b-2 border-white rounded-full animate-spin"></div>
      ) : (
        "Submit"
      )}
      <Send
        size={"20"}
        className="text-xs transition-all opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </button>
  );
}
