import { Reveal } from './reveal'
import { experience } from '@/data/experience'

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-40"
    >
      <Reveal
        as="p"
        className="mb-12 flex items-baseline gap-4 text-[11px] uppercase tracking-[0.28em] text-muted-foreground md:mb-20"
      >
        <span className="h-px w-10 bg-hairline" aria-hidden="true" />
        Experience
      </Reveal>

      <div className="border-t border-hairline">
        {experience.map((item, i) => (
          <Reveal key={`${item.year}-${item.organization}`} delay={i * 70}>
            <div className="group grid grid-cols-1 gap-2 border-b border-hairline py-8 transition-colors md:grid-cols-12 md:items-baseline md:gap-6 md:py-10">
              <span className="font-serif text-2xl font-light text-foreground md:col-span-2 md:text-3xl">
                {item.year}
              </span>
              <h3 className="font-serif text-xl font-normal leading-tight text-foreground md:col-span-4 md:text-2xl">
                {item.organization}
              </h3>
              <p className="text-sm text-muted-foreground md:col-span-4">
                {item.role}
              </p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:col-span-2 md:text-right">
                {item.location}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
