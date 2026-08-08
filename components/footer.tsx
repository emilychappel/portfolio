import { Reveal } from './reveal'

const CONTACT_LINKS = [
  { label: 'Email', value: 'hello@emilychappel.com', href: 'mailto:hello@emilychappel.com' },
  { label: 'LinkedIn', value: 'in/emilychappel', href: 'https://www.linkedin.com' },
  { label: 'GitHub', value: '@emilychappel', href: 'https://www.github.com' },
]

export function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-[1400px] px-6 pt-24 md:px-12 md:pt-40">
      <Reveal
        as="p"
        className="mb-10 flex items-baseline gap-4 text-[11px] uppercase tracking-[0.28em] text-muted-foreground md:mb-14"
      >
        <span className="h-px w-10 bg-hairline" aria-hidden="true" />
        Let&apos;s Talk
      </Reveal>

      <Reveal>
        <h2 className="max-w-3xl font-serif text-5xl font-light leading-[1.03] tracking-[-0.01em] text-balance md:text-7xl lg:text-8xl">
          Have something <span className="italic">interesting</span> to work on?
        </h2>
      </Reveal>

      <Reveal delay={140}>
        <ul className="mt-16 flex flex-col gap-px border-t border-hairline md:mt-24">
          {CONTACT_LINKS.map((link) => (
            <li key={link.label} className="border-b border-hairline">
              <a
                href={link.href}
                className="group flex items-baseline justify-between py-6 md:py-7"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {link.label}
                </span>
                <span className="link-underline font-serif text-lg text-foreground md:text-2xl">
                  {link.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-24 md:mt-40" aria-hidden="true">
        <p className="font-serif text-[18vw] font-light leading-[0.8] tracking-[-0.02em] text-foreground md:text-[16vw]">
          Emily Chappel
        </p>
      </div>

      <div className="flex flex-col items-start justify-between gap-2 py-8 text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:flex-row md:py-10">
        <p>&copy; {new Date().getFullYear()} Emily Chappel</p>
        <p>Finance &middot; Strategy &middot; Technology</p>
      </div>
    </footer>
  )
}
