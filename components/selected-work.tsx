import { Reveal } from './reveal'
import { ProjectItem } from './project-item'
import { projects } from '@/data/projects'

export function SelectedWork() {
  return (
    <section id="work" className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
      <Reveal
        as="p"
        className="mb-16 flex items-baseline gap-4 text-[11px] uppercase tracking-[0.28em] text-muted-foreground md:mb-24"
      >
        <span className="h-px w-10 bg-hairline" aria-hidden="true" />
        Selected Work
      </Reveal>

      {/* Mobile: clean vertical sequence */}
      <div className="flex flex-col gap-20 md:hidden">
        {projects.map((project, i) => (
          <ProjectItem key={project.number} project={project} index={i} />
        ))}
      </div>

      {/* Tablet & desktop: asymmetric, staggered two-track editorial layout */}
      <div className="hidden gap-12 md:flex xl:gap-24">
        {/* Left track */}
        <div className="flex w-1/2 flex-col gap-24 lg:gap-44">
          <div className="max-w-[82%] lg:max-w-[78%]">
            <ProjectItem project={projects[0]} index={0} />
          </div>
          <div className="max-w-full lg:-mt-10">
            <ProjectItem project={projects[2]} index={2} />
          </div>
        </div>

        {/* Right track — offset downward */}
        <div className="flex w-1/2 flex-col gap-24 pt-20 lg:gap-44 lg:pt-52">
          <div className="ml-auto max-w-[72%] lg:max-w-[66%]">
            <ProjectItem project={projects[1]} index={1} />
          </div>
          <div className="ml-auto max-w-[88%] lg:mt-6 lg:max-w-[82%]">
            <ProjectItem project={projects[3]} index={3} />
          </div>
        </div>
      </div>
    </section>
  )
}
