import type { ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  illustration: ReactNode;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card card-hover flex flex-col overflow-hidden">
      {/* Illustration */}
      <div className="relative h-44 w-full overflow-hidden border-b border-[var(--border)] bg-gradient-to-br from-[var(--bg-soft-blue)] to-white">
        {project.illustration}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold leading-snug text-[var(--deep-navy)]">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="skill-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
