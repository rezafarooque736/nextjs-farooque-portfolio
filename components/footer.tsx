import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-slate-500">
      <small className="mb-2 text-xs block">
        &copy; 2024 Farooque. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website</span> built with
        React & Next.js (App Router & Server Action), Typescript, Tailwind CSS,
        Framer Motion, Resend & React Email, Vercel Hosting.
      </p>
    </footer>
  );
}
