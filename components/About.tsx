export default function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          {/* Section label */}
          <div className="flex items-start gap-3">
            <span className="text-[11px] font-medium uppercase tracking-widest2 text-ink/40">
              01 / About
            </span>
          </div>

          {/* Bio */}
          <div>
            <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
              A little about me.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
              I&apos;m Emily, a Finance &amp; Accounting student in the Dual
              Degree Program between the University of Hong Kong (HKU) and
              the University of British Columbia (UBC). I&apos;m drawn to the
              intersection of financial analysis, markets, and strategy —
              and I&apos;m always looking for opportunities to sharpen that
              through coursework, case competitions, and hands-on projects.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
              Outside the classroom, I&apos;m interested in how data-driven
              decision-making shapes business strategy, and I&apos;m building
              toward a career in finance where I can bring together
              analytical rigor and clear communication. This is a placeholder
              bio — swap in your own story, interests, and goals.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {["Finance", "Accounting", "Case Competitions", "Markets", "Strategy"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium uppercase tracking-widest2 text-ink/50"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-7xl">
        <div className="h-px w-full bg-line" />
      </div>
    </section>
  );
}
