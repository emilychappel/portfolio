import ImageCard, { ImageCardData } from "./ImageCard";

const PROJECT_ITEMS: ImageCardData[] = [
  {
    src: "/images/card-3.svg",
    alt: "Placeholder — research project image",
    category: "Research",
    title: "Project Title — Equity Valuation Study",
    meta: "2026",
  },
  {
    src: "/images/card-4.svg",
    alt: "Placeholder — consulting project image",
    category: "Consulting",
    title: "Project Title — Market Entry Analysis",
    meta: "2026",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-4 sm:mb-20 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-widest2 text-ink/40">
              03 / Projects
            </span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
              Selected projects.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink/50">
            Placeholder entries — swap in research, coursework, and
            independent projects as they come together.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
          {PROJECT_ITEMS.map((item) => (
            <ImageCard key={item.title} {...item} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-7xl">
        <div className="h-px w-full bg-line" />
      </div>
    </section>
  );
}
