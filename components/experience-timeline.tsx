import { experiencesData } from "@/lib/data";
import { LaptopIcon } from "lucide-react";
import Image from "next/image";

const ExperienceTimeline = () => {
  return (
    <div>
      <div className="my-10">
        <ol className="relative border-s-2 border-slate-300">
          {experiencesData.map((item) => (
            <li key={item.id} className="mb-10 ms-6">
              <div className="absolute flex items-center justify-center rounded-full bg-slate-100 size-10 -start-6">
                <Image
                  src={item.imageUrl}
                  width={40}
                  height={40}
                  alt="logo"
                  className="object-contain w-10 h-10"
                />
              </div>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-slate-900 dark:text-white">
                {item.title} -{" "}
                <span className="text-sm font-light ms-1 text-slate-400">
                  ({item.timeline})
                </span>
              </h3>
              <time className="block mb-2 text-sm font-normal text-slate-500 dark:text-slate-500">
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
