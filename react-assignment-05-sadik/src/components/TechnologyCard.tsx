import {
  SiReact,
  SiVuedotjs,
  SiSvelte,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
} from "react-icons/si";
import type { IconType } from "react-icons";

import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

const iconMap: Record<string, IconType> = {
  SiReact,
  SiVuedotjs,
  SiSvelte,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
};

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  const TechnologyIcon = iconMap[technology.icon];

  if (!TechnologyIcon) {
    return null;
  }

  return (
    <article className="flex min-h-[290px] flex-col rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">

      {/* Top row */}
      <div className="mb-4 flex items-start justify-between">
        {/* Technology icon */}
        <div className="flex h-10 w-10 items-center justify-center">
          <TechnologyIcon className="h-8 w-8" />
        </div>

        {/* Badge */}
        <span className="rounded-full bg-pink-50 px-3 py-1 text-[11px] font-medium text-pink-600">
          {technology.badge}
        </span>
      </div>

      {/* Technology name */}
      <h3 className="mb-2 text-lg font-bold text-slate-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mb-5 flex-1 text-sm leading-6 text-slate-500">
        {technology.description}
      </p>

      {/* Information row */}
      <div className="mb-4 flex items-center justify-between gap-2 text-[11px]">
        <span className="rounded bg-slate-50 px-2 py-1 font-medium text-slate-600">
          {technology.category}
        </span>

        <span className="text-slate-500">
          {technology.difficulty}
        </span>

        <span className="flex items-center gap-1 font-medium text-slate-700">
          <span className="text-amber-400">★</span>
          {technology.rating}
        </span>
      </div>

      {/* Add button */}
      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`w-full rounded-md px-4 py-2.5 text-sm font-medium transition ${
          isAdded
            ? "cursor-not-allowed bg-slate-200 text-slate-500"
            : "bg-slate-950 text-white hover:bg-pink-600"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
};

export default TechnologyCard;