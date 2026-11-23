import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/[0.07] bg-white shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-soft">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-deep backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold tracking-[-0.02em] text-ink">{project.title}</h3>
        <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-muted">
          {project.description}
        </p>
        <Link
          to={`/projects#${project.slug}`}
          className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-deep transition hover:text-brand-teal"
        >
          View details
          <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
