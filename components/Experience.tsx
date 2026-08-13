import ImageCard, { ImageCardData } from "./ImageCard";

const EXPERIENCE_ITEMS: ImageCardData[] = [
  {
    src: "/images/card-1.svg",
    alt: "Placeholder — internship or work experience image",
    category: "Internship",
    title: "Company Name — Summer Analyst",
    meta: "2025",
  },
  {
    src: "/images/card-2.svg",
    alt: "Placeholder — case competition image",
    category: "Case Competition",
    title: "Competition Name — Finalist",
    meta: "2025",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-4 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-4 sm:mb-20 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-widest2 text-ink/40">
              02 / Experience
            </span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
              Where I&apos;ve worked.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink/50">
            Placeholder entries — swap in internships, case competitions,
            and other professional experience as they come in.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
          {EXPERIENCE_ITEMS.map((item) => (
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
