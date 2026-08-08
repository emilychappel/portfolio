export type Project = {
  number: string
  title: string
  category: string
  description: string
  image: string
  imageAlt: string
  href?: string
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'Strategy & Case Competitions',
    category: 'Consulting · Team Lead',
    description:
      'Framing ambiguous business problems into clear, defensible recommendations under competitive time pressure.',
    image: '/images/project-01.png',
    imageAlt: 'Still life of a notebook and pen on a linen surface',
    href: '#',
  },
  {
    number: '02',
    title: 'Finance & Investment Research',
    category: 'Equity Research · Analyst',
    description:
      'Building valuation models and market theses that translate raw data into conviction and narrative.',
    image: '/images/project-02.png',
    imageAlt: 'Abstract layered translucent paper forming chart-like lines',
    href: '#',
  },
  {
    number: '03',
    title: 'Building & Technology',
    category: 'Product · Engineering',
    description:
      'Shipping software at the intersection of design and systems thinking, from prototype to production.',
    image: '/images/project-03.png',
    imageAlt: 'Detail of a modernist concrete and glass structure',
    href: '#',
  },
  {
    number: '04',
    title: 'Leadership & Community',
    category: 'Organizations · Founder',
    description:
      'Growing communities and mentoring the next cohort of people building at the edges of finance and tech.',
    image: '/images/project-04.png',
    imageAlt: 'A single elegant chair beside a window with draped fabric',
    href: '#',
  },
]
