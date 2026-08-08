import { Reveal } from './reveal'

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-[1400px] px-6 pt-20 pb-32 md:px-12 md:pt-32 md:pb-48"
    >
      <Reveal
        as="p"
        className="mb-10 text-[11px] uppercase tracking-[0.28em] text-muted-foreground md:mb-14 md:text-xs"
      >
        Finance <span aria-hidden="true">·</span> Strategy{' '}
        <span aria-hidden="true">·</span> Technology{' '}
        <span aria-hidden="true">·</span> Global Perspective
      </Reveal>

      <Reveal delay={80}>
        <h1 className="max-w-full font-serif lg:max-w-[68%] text-[2.75rem] font-light leading-[1.04] tracking-[-0.01em] text-balance min-[560px]:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6rem]">
          I&apos;m interested in the{' '}
          <span className="italic">ideas</span>, companies, and{' '}
          <span className="italic">people</span> shaping what comes next.
        </h1>
      </Reveal>

      <Reveal delay={200}>
        <a
          href="#work"
          className="group mt-14 inline-flex items-center gap-2 border-b border-foreground/40 pb-1 text-xs uppercase tracking-[0.22em] text-foreground transition-colors hover:border-foreground md:mt-20"
        >
          Explore My Work
          <svg
            aria-hidden="true"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
          >
            <path d="M2.5 2.5 L9.5 9.5" strokeLinecap="round" />
            <path d="M9.5 3.5 L9.5 9.5 L3.5 9.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </Reveal>
    </section>
  )
}
