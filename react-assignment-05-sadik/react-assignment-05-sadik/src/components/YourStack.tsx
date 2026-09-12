import type { Technology } from "../types/technology";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="h-fit rounded-xl border border-gray-100 bg-white p-5 shadow-sm lg:sticky lg:top-24">

      {/* Heading */}
      <div className="mb-5">
        <h2 className="text-lg font-bold text-slate-900">
          Your Stack
        </h2>

        <p className="mt-1 text-xs text-slate-400">
          {stack.length} Technology{" "}
          {stack.length === 1 ? "Selected" : "Selected"}
        </p>
      </div>

      {/* Empty state */}
      {stack.length === 0 ? (
        <div className="rounded-lg border border-dashed border-gray-200 px-4 py-8 text-center">
          <p className="text-sm font-medium text-slate-600">
            Your stack is empty
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-400">
            Add technologies from the list to build your development stack.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-lg border border-gray-200 p-3"
            >
              {/* Icon */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-slate-50 text-xs font-bold">
                {technology.name.charAt(0)}
              </div>

              {/* Name and category */}
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-800">
                  {technology.name}
                </p>

                <p className="text-[10px] text-slate-400">
                  {technology.category}
                </p>
              </div>

              {/* Remove */}
              <button
                type="button"
                onClick={() => onRemove(technology.id)}
                aria-label={`Remove ${technology.name}`}
                className="text-xl leading-none text-slate-400 transition hover:text-pink-600"
              >
                ×
              </button>
            </div>
          ))}

          {/* Remove all */}
          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-3 w-full rounded-md border border-pink-200 px-4 py-2.5 text-sm font-medium text-pink-600 transition hover:bg-pink-50"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
};

export default YourStack;