'use client';

import { Send } from 'lucide-react';
import { useFormStatus } from 'react-dom';

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      // aria-disabled={pending}
      className="group disabled:bg-opacity-70 flex h-[3rem] w-[8rem] items-center justify-center gap-2 self-center rounded-full bg-slate-900 text-white transition-all outline-none hover:scale-110 hover:bg-slate-950 focus:scale-110 active:scale-105 disabled:scale-100 disabled:cursor-not-allowed dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        'Submit'
      )}
      <Send
        size={'20'}
        className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </button>
  );
}
