import { Reveal } from './reveal'

export function AboutPreview() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-40">
      <Reveal
        as="p"
        className="mb-12 flex items-baseline gap-4 text-[11px] uppercase tracking-[0.28em] text-muted-foreground md:mb-16"
      >
        <span className="h-px w-10 bg-hairline" aria-hidden="true" />
        About
      </Reveal>

      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-7">
          <h2 className="font-serif text-4xl font-light leading-[1.08] tracking-[-0.01em] text-balance md:text-5xl lg:text-6xl">
            Curious about how businesses, markets,{' '}
            <span className="italic">technology</span>, and{' '}
            <span className="italic">people</span> interact.
          </h2>
        </Reveal>

        <Reveal delay={120} className="md:col-span-5 md:col-start-8 md:pt-3">
          <div className="max-w-md space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              I&apos;m a finance and strategy student drawn to the moments where
              rigorous analysis meets genuine human ambition — where a spreadsheet
              becomes a decision and a decision becomes a company.
            </p>
            <p>
              My work moves between investment research, strategy consulting, and
              building software, because I believe the most interesting questions
              live in the overlap rather than any single discipline.
            </p>
            <p>
              Outside of that, I write, mentor, and spend a suspicious amount of
              time reading about the companies quietly reshaping the next decade.
            </p>
            <a
              href="#contact"
              className="link-underline inline-block pt-2 text-xs uppercase tracking-[0.22em] text-foreground"
            >
              More About Me &#8594;
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
