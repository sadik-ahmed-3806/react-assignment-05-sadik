import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import technologiesData from "../data/technologies.json";

import type { Technology } from "../types/technology";

import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  // Load technology data from JSON
  useEffect(() => {
    const loadTechnologies = async () => {
      setLoading(true);

      // Small delay makes the loading state visible during development.
      await new Promise((resolve) => setTimeout(resolve, 300));

      setTechnologies(technologiesData as Technology[]);
      setLoading(false);
    };

    loadTechnologies();
  }, []);

  // Add technology
  const handleAddToStack = (technology: Technology) => {
    const alreadyExists = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack.`);
  };

  // Remove one technology
  const handleRemoveFromStack = (id: string) => {
    const removedTechnology = stack.find(
      (technology) => technology.id === id
    );

    setStack((previousStack) =>
      previousStack.filter(
        (technology) => technology.id !== id
      )
    );

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack.`);
    }
  };

  // Remove everything
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info("All technologies were removed from your stack.");
  };

  return (
    <section
      id="technologies"
      className="bg-white px-5 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1280px]">

        {/* Section heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Explore the{" "}
            <span className="bg-[var(--brand-gradient)] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Pick the technologies you want to include in your development stack.
          </p>
        </div>

        {/* Loading state */}
        {loading ? (
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-200 border-t-pink-500" />
              Loading technologies...
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_250px]">

            {/* Technology cards */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={stack.some(
                    (item) => item.id === technology.id
                  )}
                  onAdd={handleAddToStack}
                />
              ))}
            </div>

            {/* Your Stack */}
            <YourStack
              stack={stack}
              onRemove={handleRemoveFromStack}
              onRemoveAll={handleRemoveAll}
            />

          </div>
        )}
      </div>
    </section>
  );
};

export default TechnologySection;