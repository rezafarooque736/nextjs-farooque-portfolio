import { experiencesData } from '@/lib/data';
import { LaptopIcon } from 'lucide-react';
import Image from 'next/image';

const ExperienceTimeline = () => {
  return (
    <div>
      <div className="my-10">
        <ol className="relative border-s-2 border-slate-300">
          {experiencesData.map((item) => (
            <li key={item.id} className="ms-6 mb-10">
              <div className="absolute -start-6 flex size-10 items-center justify-center rounded-full bg-slate-100">
                <Image
                  src={item.imageUrl}
                  width={40}
                  height={40}
                  alt="logo"
                  className="h-10 w-10 object-contain"
                />
              </div>
              <h3 className="mb-1 flex items-center text-lg font-semibold text-slate-900 dark:text-white">
                {item.title} -{' '}
                <span className="ms-1 text-sm font-light text-slate-400">
                  ({item.timeline})
                </span>
              </h3>
              <time className="mb-2 block text-sm font-normal text-slate-500 dark:text-slate-500">
                {item.location}
              </time>
              <p className="mb-4 text-base font-normal text-slate-500 dark:text-slate-400">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
