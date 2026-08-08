const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1400px] flex-col gap-3 px-6 py-4 min-[560px]:flex-row min-[560px]:items-center min-[560px]:justify-between md:px-12 md:py-6"
      >
        <a
          href="#top"
          className="shrink-0 font-serif text-lg tracking-tight text-nowrap text-foreground md:text-xl"
        >
          Emily Chappel
        </a>
        <ul className="flex items-center justify-between gap-5 min-[560px]:justify-end min-[560px]:gap-8 md:gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground md:text-xs md:tracking-[0.18em]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
