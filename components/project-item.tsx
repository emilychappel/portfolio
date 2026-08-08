import Image from 'next/image'
import { Reveal } from './reveal'
import type { Project } from '@/data/projects'

type ProjectItemProps = {
  project: Project
  /** index used to stagger the entrance animation */
  index: number
}

export function ProjectItem({ project, index }: ProjectItemProps) {
  return (
    <article className="group">
      <Reveal delay={index * 90}>
        <span className="block font-serif text-5xl font-light leading-none text-foreground md:text-6xl lg:text-7xl">
          {project.number}
        </span>
      </Reveal>

      <a href={project.href ?? '#'} className="mt-6 block md:mt-8">
        <Reveal variant="clip" delay={index * 90 + 60}>
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-foreground/5">
            <Image
              src={project.image || '/placeholder.svg'}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            />
          </div>
        </Reveal>

        <Reveal delay={index * 90 + 120}>
          <h3 className="mt-6 font-serif text-2xl font-normal leading-tight text-foreground md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {project.category}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </Reveal>
      </a>
    </article>
  )
}
