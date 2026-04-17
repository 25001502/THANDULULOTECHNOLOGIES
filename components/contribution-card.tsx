import { Dot, Sparkles } from "lucide-react";

const weeks = Array.from({ length: 20 }, (_, week) =>
  Array.from({ length: 7 }, (_, day) => {
    const seed = (week * 13 + day * 7 + (week % 4) * 3) % 11;

    if ((week + day) % 9 === 0) {
      return 0;
    }

    if (seed < 2) {
      return 1;
    }

    if (seed < 5) {
      return 2;
    }

    if (seed < 8) {
      return 3;
    }

    return 4;
  }),
);

const intensityClasses = [
  "bg-white/5",
  "bg-primary/20",
  "bg-primary/35",
  "bg-primary/55",
  "bg-primary",
];

export function ContributionCard() {
  return (
    <article className="glass-panel rounded-[32px] p-6 sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.3em] text-primary">
            <Sparkles className="size-3.5" />
            Activity Snapshot
          </div>
          <div>
            <h3 className="text-xl font-semibold text-base-content sm:text-2xl">
              GitHub-style build rhythm
            </h3>
            <p className="mt-2 max-w-md text-sm leading-7 text-base-content/65">
              A premium mock activity grid designed to echo active product work
              without relying on external APIs.
            </p>
          </div>
        </div>
        <div className="rounded-[24px] border border-white/10 bg-black/30 px-4 py-3 text-right">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-base-content/45">
            Current Focus
          </p>
          <p className="mt-2 text-sm font-medium text-base-content">
            Product builds and client-ready delivery
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-[28px] border border-white/10 bg-black/25 p-4 sm:p-5">
        <div className="grid grid-flow-col grid-rows-7 gap-2">
          {weeks.flatMap((week, weekIndex) =>
            week.map((intensity, dayIndex) => (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className={`size-3 rounded-[4px] border border-white/5 ${intensityClasses[intensity]}`}
              />
            )),
          )}
        </div>

        <div className="mt-5 flex items-center justify-between gap-4 text-xs text-base-content/45">
          <div className="flex items-center gap-2 font-mono uppercase tracking-[0.24em]">
            <span>Apr</span>
            <Dot className="size-4" />
            <span>Sep</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Light</span>
            {intensityClasses.map((className) => (
              <div
                key={className}
                className={`size-3 rounded-[4px] border border-white/5 ${className}`}
              />
            ))}
            <span>Focused</span>
          </div>
        </div>
      </div>
    </article>
  );
}
