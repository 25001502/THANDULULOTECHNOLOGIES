import type { StatItem } from "@/data/site-content";

type StatCardProps = {
  stat: StatItem;
};

export function StatCard({ stat }: StatCardProps) {
  return (
    <article className="glass-panel rounded-[28px] p-5 transition-transform duration-300 hover:-translate-y-1">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-base-content/45">
        {stat.label}
      </p>
      <p className="mt-4 text-2xl font-semibold text-base-content">{stat.value}</p>
      <p className="mt-3 text-sm leading-7 text-base-content/65">{stat.detail}</p>
    </article>
  );
}
