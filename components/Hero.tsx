import Image from "next/image";

const HERO_IMAGES = [
  {
    src: "/images/hero-1.svg",
    alt: "Placeholder editorial portrait — swap for your own image",
    category: "Portrait",
    title: "Emily Chappel — HKU / UBC, 2026",
  },
  {
    src: "/images/hero-2.svg",
    alt: "Placeholder editorial photo — swap for your own image",
    category: "Editorial",
    title: "Finance & Accounting — Dual Degree",
  },
];

export default function Hero() {
  return (
    <section id="home" className="px-4 pt-6 sm:px-8 sm:pt-10">
      <div className="relative mx-auto max-w-7xl rounded-[2rem] bg-card px-6 py-12 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] sm:px-10 sm:py-16 lg:px-14">
        {/* Vertical "Categories +" accent label — desktop only */}
        <span className="vertical-label absolute left-4 top-1/2 hidden -translate-y-1/2 text-[11px] font-medium uppercase tracking-widest2 text-ink/50 lg:block">
          Categories +
        </span>

        {/* Wordmark + tagline */}
        <div className="lg:pl-10">
          <h1 className="font-display text-hero font-semibold leading-[0.85] tracking-tightest text-ink">
            Emily.
          </h1>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/60 sm:text-base">
            Finance &amp; Accounting student in the Dual Degree Program between
            the University of Hong Kong (HKU) and the University of British
            Columbia (UBC).
          </p>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-line sm:my-14" />

        {/* Image pair */}
        <div className="relative lg:pl-10">
          {/* Slide pill */}
          <div className="absolute -top-8 right-0 z-10 hidden items-center gap-2 rounded-full border border-ink/15 bg-card px-4 py-2 shadow-sm sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            <span className="text-[10px] font-medium uppercase tracking-widest2 text-ink/70">
              Slide
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
            {HERO_IMAGES.map((image) => (
              <figure key={image.src} className="group">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-ink/5">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    priority
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                  <span className="text-[10px] font-semibold uppercase tracking-widest2 text-ink/50">
                    {image.category}
                  </span>
                </figcaption>
                <p className="mt-1 font-display text-base italic text-ink/80">
                  {image.title}
                </p>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
