type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl space-y-4 ${
        center ? "mx-auto text-center" : "text-left"
      }`}
    >
      <div
        className={`badge badge-outline gap-2 rounded-full border-white/10 bg-white/5 px-4 py-3 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-primary ${
          center ? "mx-auto" : ""
        }`}
      >
        {eyebrow}
      </div>
      <h2 className="text-balance text-3xl font-semibold leading-tight text-base-content sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="text-pretty text-base leading-8 text-base-content/70 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
