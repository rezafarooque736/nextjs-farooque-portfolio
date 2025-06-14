import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { AppContextProvider } from '@/context/app-context';
import { ReactNode } from 'react';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Farooque | Personal Portfolio',
  description:
    'Farooque Reza is a full-stack developer with 2 years of experience in web development.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} dark:text-opacity-90 relative bg-slate-50 pt-28 text-slate-950 sm:pt-36 dark:bg-gray-900 dark:text-slate-50`}
      >
        <div className="absolute top-[-6rem] right-[11rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="absolute top-[-1rem] left-[-35rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <AppContextProvider>
          <Header />
          {children}
          <Footer />
        </AppContextProvider>
        <Toaster />
      </body>
    </html>
  );
}
